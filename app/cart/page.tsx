'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function CartPage() {
  const [promoCode, setPromoCode] = useState('');

  // Dummy cart items
  const cartItems = [
    {
      id: 1,
      name: 'Red Curry Paste',
      price: 45,
      quantity: 2,
      image: '/products/red.jpg',
    },
    {
      id: 2,
      name: 'Green Curry Paste',
      price: 45,
      quantity: 1,
      image: '/products/grid-view.jpg',
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Din Varukorg</h2>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <Image src={item.image} alt={item.name} width={80} height={80} className="rounded shadow" />
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-500">Pris: {item.price} kr</p>
                <p className="text-sm text-gray-500">Antal: {item.quantity}</p>
              </div>
            </div>
            <button className="text-red-600 hover:underline text-sm">Ta bort</button>
          </div>
        ))}
      </div>

      {/* Promo & Total */}
      <div className="mt-6 border-t pt-6 space-y-4">
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Kampanjkod"
            className="border px-4 py-2 rounded w-64"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm">
            Använd kod
          </button>
        </div>

        <div className="text-right">
          <p className="text-lg font-semibold">Totalt: {subtotal} kr</p>
          <a
            href="/checkout"
            className="inline-block mt-4 bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition"
          >
            Gå till Kassan
          </a>
        </div>
      </div>
    </div>
  );
}
