'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ProductDetailClient({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-4">Start / Shop / {product.title}</div>

      {/* Product Info Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded overflow-hidden">
            <Image
              src={product.image || '/placeholder.jpg'}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square relative rounded overflow-hidden">
                <Image
                  src={`/products/thumb-${i}.jpg`}
                  alt={`thumb-${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.subtitle}</p>

          <div className="mt-4 text-2xl text-green-700 font-semibold">{product.price} kr</div>

          {/* Quantity */}
          <div className="mt-4 flex items-center space-x-2">
            <label htmlFor="quantity" className="text-sm text-gray-700">
              Antal:
            </label>
            <input
              id="quantity"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 border rounded px-2 py-1"
            />
          </div>

          {/* Add to cart */}
          <button className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition text-sm">
            Lägg i varukorg
          </button>
        </div>
      </div>

      {/* Long Description */}
      <div className="mt-10 text-gray-600 leading-relaxed text-sm">
        {product.description || 'No additional details available.'}
      </div>
    </>
  );
}
