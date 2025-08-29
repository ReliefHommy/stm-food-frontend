'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import ShopNavbar from '../components/shop/ShopNavbar';
import ProductCard from '../components/shop/ProductCard';

export default function ShopPage() {

 const [, setProducts] = useState([])




  
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
    
    <div className="max-w-7xl mx-auto px-6 py-10 bg-white">
      <ShopNavbar/><br></br>
      {/* ✅ Breadcrumbs */}

      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-4">
        <Link href="/" className="text-green-600 hover:underline">Home</Link> / 
        <Link href="/shop" className="text-green-600 hover:underline ml-1">Shop</Link> / 
        <span className="ml-1 text-gray-700 font-medium">Curry Pastes</span>
      </div>


      {/* Banner */}
      <div className="mb-8 rounded-lg overflow-hidden shadow">
        <Image
          src="/banners/thaiband.png"
          alt="Shop Banner"
          width={1200}
          height={300}
          className="w-full object-cover"
        />
      </div>

      {/* Placeholder for next sections */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Curry Pastes</h1>
      <p className="text-gray-600">Showing all products in this category...</p>
            {/* Layout: Sidebar + Content */}
            <div className="flex flex-col lg:flex-row gap-8">
      
              {/* ✅ 2. Filters Sidebar */}
              <aside className="w-full lg:w-1/4 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-black">Filter</h3>
      
                {/* Category */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-1 text-black">Kategori</h4>
                  <ul className="space-y-1 text-sm">
                    <li><input type="checkbox" /> Curry Pastes</li>
                    <li><input type="checkbox" /> Rice & Noodles</li>
                    <li><input type="checkbox" /> Snacks</li>
                  </ul>
                </div>
      
                {/* Price Range */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-1 text-black">Pris</h4>
                  <input type="range" min={0} max={100} />
                </div>
      
                {/* Brand */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-1 text-black">Varumärke</h4>
                  <ul className="space-y-1 text-sm">
                    <li><input type="checkbox" /> Mae Ploy</li>
                    <li><input type="checkbox" /> Aroy-D</li>
                    <li><input type="checkbox" /> Lobo</li>
                  </ul>
                </div>
      
                {/* Availability */}
                <div className="mb-2">
                  <h4 className="text-sm font-medium mb-1">Tillgänglighet</h4>
                  <label><input type="checkbox" /> I lager</label>
                </div>
              </aside>
      
              {/* ✅ 3–5: Main Content */}
              <main className="w-full lg:w-3/4">
      
                {/* 4. Sort Dropdown */}
                <div className="flex justify-end mb-4">
                  <select className="px-3 py-1 rounded text-sm">
                    <option value="popularity">Sortera: Popularitet</option>
                    <option value="price_low">Lägsta pris</option>
                    <option value="price_high">Högsta pris</option>
                    <option value="newest">Nyaste</option>
                  </select>
                </div>
      
              
{/* 3. Grid of Products */}
<ProductCard/>
<br /><br />



      
                {/* 5. Pagination / Load More */}
                <div className="text-center">
                  <button className="bg-green-100 text-green-800 px-6 py-2 rounded hover:bg-green-200 text-sm font-medium">
                    Visa fler produkter
                  </button>
                </div>
      
              </main>
            </div>

    </div>
  );
}


