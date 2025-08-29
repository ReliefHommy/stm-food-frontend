'use client';


import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
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

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.full_name || !form.shipping_address || !form.phone) {
      alert('Please fill in all fields');
      return;
    }

    // For now: log the order
    console.log('Order submitted:', {
      customer: form,
      cart,
      total,
    });

    clearCart();
    alert('Order placed successfully!');
    router.push('/'); // back to home
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.full_name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block font-medium">Address</label>
              <textarea
                name="address"
                value={form.shipping_address}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-lg mb-2">Cart Summary</h3>
              <ul className="space-y-2 text-sm">
                {cart.map((item: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; quantity: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; price: number; }) => (
                  <li key={item.id}>
                    {item.title} × {item.quantity} — {item.price * Number(item.quantity)} kr
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-bold text-right">Total: {total} kr</p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded mt-6 hover:bg-green-700"
            >
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
}
