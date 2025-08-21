'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* 1. Image Gallery & Info */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow">
            <Image
              src="/products/grid-view.jpg"
              alt="Curry Paste"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="relative aspect-square rounded overflow-hidden">
                <Image
                  src={`/products/thumb-${i + 1}.jpg`}
                  alt={`thumb-${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          {/* 2. Title + Short Description */}
          <h1 className="text-3xl font-bold text-gray-800">Red Curry Paste</h1>
          <p className="text-gray-600 mt-2">Lobo · 400g</p>

          {/* 3. Price + Quantity Selector */}
          <div className="mt-4 text-2xl text-green-700 font-semibold">45 kr</div>
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

          {/* 4. Add to Cart */}
          <button className="mt-6 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition text-sm">
            Lägg i varukorg
          </button>
        </div>
      </div>

      {/* 5. Long Description Tabs */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Produktinformation</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            Red Curry Paste med autentisk thailändsk smak. Perfekt för curryrätter, soppor och marinader.
          </p>
          <p className="font-medium mt-2">Ingredienser:</p>
          <p>Chili, citrongräs, vitlök, salt, galangal, korianderfrö, kummin, kanel.</p>
          <p className="font-medium mt-2">Användningstips:</p>
          <p>
            Fräs pastan i olja och tillsätt kokosmjölk, grönsaker och kött eller tofu. Servera med ris.
          </p>
        </div>
      </div>

      {/* 6. Related Products */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Liknande produkter</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="min-w-[160px] border rounded shadow hover:shadow-md transition p-2 flex-shrink-0"
            >
              <div className="relative w-full h-32 rounded-md overflow-hidden mb-2">
                <Image
                  src="/products/grid-view.jpg"
                  alt="Curry"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-medium text-gray-800">Green Curry Paste</p>
              <p className="text-xs text-gray-500">Mae Ploy · 400g</p>
              <p className="text-sm text-green-700 font-semibold mt-1">45 kr</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

