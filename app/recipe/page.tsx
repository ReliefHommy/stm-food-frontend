'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function RecipePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      {/* ✅ Breadcrumbs */}

      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-4">
        <Link href="/" className="text-green-600 hover:underline">Home</Link> / 
        <Link href="/shop" className="text-green-600 hover:underline ml-1">Recipes</Link> / 
        <span className="ml-1 text-gray-700 font-medium">Thai Papaya sallad</span>
      </div>


      {/* Banner */}
      <div className="mb-8 rounded-lg overflow-hidden shadow">
        <Image
          src="/banners/shop-banner.jpg"
          alt="Shop Banner"
           width={1200}
          height={300}
          className="w-full object-cover"
        />
      </div>

      {/* Placeholder for next sections */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Thai Papaya sallad</h1>
      <p className="text-gray-600">Showing all Recipes in sallad...</p>
            {/* Layout: Sidebar + Content */}
            <div className="flex flex-col lg:flex-row gap-8">
      
              {/* ✅ 2. Filters Sidebar */}
              <aside className="w-full lg:w-1/4 border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Filter</h3>
      
                {/* Category */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-1">Kategories</h4>
                  <ul className="space-y-1 text-sm">
                    <li><input type="checkbox" /> Curry</li>
                    <li><input type="checkbox" /> Wok</li>
                    <li><input type="checkbox" /> Sallad</li>
                  </ul>
                </div>
      
                {/* Price Range */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-1">Pris</h4>
                  <input type="range" min={0} max={100} />
                </div>
      
                {/* Brand */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-1">Varumärke</h4>
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
{/* 3. Grid of Products */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {[...Array(6)].map((_, i) => (
    <div key={i} className="border p-4 rounded shadow hover:shadow-md transition">
      <div className="h-40 flex items-center justify-center rounded-md overflow-hidden shadow mb-2">
        <Image
          src="/healthy-food-01.png"
          alt="Green Curry Paste"
       width={480} height={340}
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h4 className="text-lg font-semibold text-center">Thai Papaya sallad</h4>
      <p className="text-sm text-gray-500 text-center"> Sallad</p>
      <p className="text-green-700 font-bold mt-1 text-center">40 min</p>
      <button className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition text-sm">
        See Detail...
      </button>
    </div>
  ))}
</div>



      
                {/* 5. Pagination / Load More */}
                <div className="text-center">
                  <button className="bg-green-100 text-green-800 px-6 py-2 rounded hover:bg-green-200 text-sm font-medium">
                    Visa fler recept
                  </button>
                </div>
      
              </main>
            </div>

    </div>
  );
}
