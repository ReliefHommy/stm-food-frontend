'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";


export default function ProductCard() {
  const { addToCart } = useCart();
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
   {products.map((product: any)=> (
    <Link key={product.id} 
 
    href={`/shop/${product.slug}`}
  
    className="border p-4 rounded shadow hover:shadow-md transition" >
      
      {/* Product Image */} 
      <div className="h-40 flex items-center justify-center rounded-md overflow-hidden shadow mb-2">
        <Image
          src={product.image}
          alt={product.title}
       width={300} height={300}
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
       {/* Product Title */}
      <h4 className="text-sm font-semibold text-center text-gray-700">{product.title}</h4>
       {/* Subtitle / extra info */}
      <p className="text-sm text-gray-400 text-center">The-Card | Unit | 440 g.</p>
        {/* Price */}
      <p className="text-sm text-green-700 font-bold mt-1 text-center">{product.price} kr</p>
      <button   onClick={() =>
          addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
          })
        } className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition text-sm">
        Lägg i varukorg cart
      </button>
    </Link>
  ))}
      
      
      
      
      
      
      
      
      
      
     
    </div>
  );
}
