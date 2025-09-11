'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '../context/CartContext';


export default function CheckoutPage() {
  const { cart, clearCart} = useCart();
  const router = useRouter();
  

const [form, setForm] = useState({
  full_name: '',
  phone: '',
  shipping_address: '',
  delivery_date: '',
  notes: '',
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
  
    const orderPayload = {
  "full_name": "Nok Tophita",
  "phone": "123456789",
  "shipping_address": "Test Lane 42",
  "delivery_date": "2025-09-10",
  "notes": "Please call when arrive.",
  "total_amount": 299,
items: cart.map(item => ({
  product: item.id, // ✅ Real product ID from your cart
  quantity: item.quantity,
  price_at_purchase: item.price,
}))
    };
    console.log("🛒 Sending Order Payload:", orderPayload);


    // Replace this with your actual logic to get the token, e.g., from localStorage or context
    const token = ""; // e.g., localStorage.getItem('token') || ""

    const res = await fetch('/api/place-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(orderPayload),
    });
    const data = await res.json();
    console.log("✅ Order API response:", data);

   if (!res.ok) {
     
      console.error('Error details:', data);
      throw new Error('Failed to place order.You may need to Login!');
    }

    const orderId = data.order_id ?? ""; 

    console.log('Order success:', data);
    if (!orderId) throw new Error("Order placed but no order ID returned.");
    clearCart();
    //router.push(`/order-confirmation/${orderId}`);
    router.replace(`/thank-you?order=${encodeURIComponent(orderId)}`);
 

    
    // Handle success: clear cart, redirect, etc.
  } catch (err: any) {
    setError(err.message || 'An error occurred.');
  } finally {
    setLoading(false);
  }

  
};

  return (
    
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>


      {error && <p className="text-red-500 mb-4">{error}
        <a
      href="/login"
      className="underline text-blue-600 hover:text-blue-800 ml-1"
    >
      Login
    </a></p>}

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
