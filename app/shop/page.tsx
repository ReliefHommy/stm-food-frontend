'use client'
import { useEffect, useState } from 'react'

export default function ShopPage() {
  const [products, setProducts] = useState([])

useEffect(() => {
  fetch('http://127.0.0.1:8000/api/products')
    .then(res => res.json())
    .then(data => {
      console.log('Raw API data:', data);

      // Handle both cases: with or without pagination
      const productsArray = Array.isArray(data)
        ? data
        : Array.isArray(data.results)
        ? data.results
        : [];

      setProducts(productsArray);
    })
    .catch(err => console.error('Fetch failed:', err));
}, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shop Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product: any) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-700 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


