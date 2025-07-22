'use client';
import { useState } from 'react';

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Kassa</h2>

      <form className="space-y-6">
        {/* Shipping Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Fraktinformation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Fullständigt namn"
              className="border px-4 py-2 rounded"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-postadress"
              className="border px-4 py-2 rounded"
            />
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Adress"
              className="border px-4 py-2 rounded col-span-2"
            />
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Stad"
              className="border px-4 py-2 rounded"
            />
            <input
              name="zip"
              value={form.zip}
              onChange={handleChange}
              placeholder="Postnummer"
              className="border px-4 py-2 rounded"
            />
          </div>
        </div>

        {/* Stripe Payment Placeholder */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Betalning</h3>
          <p className="text-sm text-gray-500 mb-2">Stripe-betalning integreras här...</p>
          <div className="h-20 border rounded bg-gray-100 flex items-center justify-center text-gray-400">
            [Stripe Checkout Placeholder]
          </div>
        </div>

        {/* Order Summary */}
        <div className="text-right">
          <p className="font-medium">Totalt: 135 kr</p>
          <button
            type="submit"
            className="mt-4 bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition"
          >
            Slutför beställning
          </button>
        </div>
      </form>
    </div>
  );
}
