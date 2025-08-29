'use client';


import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    full_name: '',
    phone: '',
    shipping_address: '',
    notes: '',
    delivery_date: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('access_token='))
        ?.split('=')[1];

      if (!token) {
        setError('Please log in to place an order.');
        setLoading(false);
        return;
      }

      const orderPayload = {
        ...form,
        total_amount: total,
        items: cart.map(item => ({
          product: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
      };

      const res = await fetch('http://127.0.0.1:8000/api/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderPayload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || 'Failed to place order.');
      }

      clearCart();
      alert('Order placed successfully!');
      router.push('/');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="full_name" placeholder="Full Name" onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="phone" placeholder="Phone" onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="delivery_date" type="date" onChange={handleChange} required className="w-full p-2 border rounded" />
          <textarea name="shipping_address" placeholder="Shipping Address" onChange={handleChange} required className="w-full p-2 border rounded" />
          <textarea name="notes" placeholder="Notes (optional)" onChange={handleChange} className="w-full p-2 border rounded" />

          <div className="mt-6">
            <h3 className="font-bold mb-2">Cart Summary</h3>
            <ul className="text-sm">
              {cart.map(item => (
                <li key={item.id}>
                  {item.title} × {item.quantity} = {item.quantity * item.price} kr
                </li>
              ))}
            </ul>
            <p className="mt-4 font-bold text-right">Total: {total} kr</p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
          >
            {loading ? 'Placing Order...' : 'Place Order'}
          </button>
        </form>
      )}
    </div>
  );
}
