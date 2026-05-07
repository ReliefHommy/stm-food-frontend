
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import React from 'react';
import { 
  MapPin, Clock, MessageCircle, Phone, 
  ShoppingBag, Facebook, Globe, Info 
} from 'lucide-react';

export default async function PublicCataloguePage() {
  const cookieStore = await cookies()
    const token = cookieStore.get('access_token')
    const API_URL = process.env.API_URL || 'https://api.somtammarket.com';

      if (!token?.value) {
        redirect('/login')
      }

    type Product = {
    slug: any
    id: string | number
    title?: string
    description?: string
    stock_quantity?: number
    category_name?: string
    price?: number
    image?: string
  }

  type User = {
    id: string | number
    email: string
  }

let products: Product[] = []
let user: User | null = null
let fetchError: string | null = null

  try {
    const res = await fetch(`${API_URL}/api/food/products/`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      cache: 'no-store',
    })

    if (res.status === 401) {
      // token invalid/expired
      redirect('/login')
    }

    if (!res.ok) {
      // Log server error body for debugging (don't leak to UI)
      const txt = await res.text().catch(() => '')
      console.error('Products fetch failed', res.status, txt)
      // Avoid redirecting to a non-existent /dashboard route (causes 307 -> 404).
      // Surface a friendly error message and render an empty list so the page doesn't break.
      fetchError = `Unable to fetch products (server returned ${res.status})`
      products = []
    }

    const data = await res.json().catch(() => null)
    if (Array.isArray(data)) {
      products = data
    } else {
      console.warn('Unexpected products response', data)
      products = []
    }
  } catch (err) {
    console.error('Network error fetching products', err)
    fetchError = 'Network error fetching products'
  }

    // Fetch user data
  try {
    const userRes = await fetch(`${API_URL}/api/me/`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      cache: 'no-store',
    })

    if (userRes.ok) {
      user = await userRes.json()
    }
  } catch (err) {
    console.error('Error fetching user data', err)
  }




  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      {/* 1. StoreHeader */}
      <section className="bg-white border-b border-neutral-200">
        <div className="relative h-48 w-full bg-blue-600">
          <img 
            src="/hero_stm_food.png"
            className="w-full h-full object-cover opacity-80" 
            alt="Store Cover"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 -mt-12 relative pb-6 text-center md:text-left">
          <div className="inline-block p-1 bg-white rounded-2xl shadow-lg mb-4">
            <img 
              src="/banners/banner-fruits.png"
              className="w-24 h-24 rounded-xl object-cover" 
              alt="Logo"
            />
          </div>
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900">STM Food-Örebro</h1>
              <p className="text-neutral-600 mt-1">Pre- order สินค้าจากเกษตรกรไทย ส่งตรงถึงสวีเดน</p>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-3 text-sm text-neutral-500">
                <span className="flex items-center gap-1"><MapPin size={16}/> Örebro, Sweden</span>
              </div>
            </div>
            <button className="mt-6 md:mt-0 w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-md transition-all flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Contact to Order
            </button>
          </div>
        </div>
      </section>

      {/* 2. StoreInfoBar */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl p-4 border border-neutral-200 shadow-sm flex flex-col md:flex-row gap-6 justify-around text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg"><ShoppingBag size={20}/></div>
            <div>
              <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Service</p>
              <p className="text-sm font-semibold text-neutral-700">Delivery & Pickup Available</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Clock size={20}/></div>
            <div>
              <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">Hours</p>
              <p className="text-sm font-semibold text-neutral-700">Mon - Sat: 11:00 - 20:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CategoryFilter */}
      <section className="sticky top-0 z-30 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200 py-4 overflow-x-auto">
        <div className="max-w-4xl mx-auto px-4 flex gap-2 no-scrollbar">
          {['All', 'Ready Food', 'Frozen Food', 'Sauces', 'Snacks', 'Homemade'].map((cat, i) => (
            <button 
              key={cat}
              className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all ${
                i === 0 ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-500 border border-neutral-200 hover:border-blue-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 4. ProductGrid & 5. ProductCard    {products.map((p) => ( ))}*/}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-neutral-800">Menu Items</h2>
            <p className="text-xs text-neutral-400 font-medium">Payment: Swish / Cash / Bank Transfer</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.id ?? p.slug}
              name={p.title ?? 'Unnamed product'}
              price={p.price ? `${p.price} SEK` : 'Price on Request'}
              desc={p.description}
              cat={p.category_name}
              img={p.image}
            />
          ))}
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="max-w-4xl mx-auto px-4 py-12 text-center border-t border-neutral-200 mt-8">
        <p className="text-sm text-neutral-400">© 2026 Thai Taste Malmö. All rights reserved.</p>
        <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-xs text-neutral-400 font-bold uppercase">Powered by</span>
            <span className="text-sm font-black text-blue-600 tracking-tighter">STM SaaS</span>
        </div>
      </footer>

      {/* 6. ContactToOrderBar (Mobile Sticky) */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-neutral-200 p-4 lg:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-3">
          <MessageCircle size={20} />
          Message Seller to Order
        </button>
      </div>
    </div>
  );
}

function ProductCard({ name, price, desc, cat, img }: any) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="relative h-48">
        <img src={img} className="w-full h-full object-cover" alt={name} />
        <span className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-black px-2 py-1 rounded uppercase">Available</span>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-neutral-900 leading-tight">{name}</h3>
          <span className="text-blue-600 font-black whitespace-nowrap">{price}</span>
        </div>
        <p className="text-xs text-neutral-500 line-clamp-2 mb-4 flex-1">{desc}</p>
        <div className="flex items-center justify-between gap-2 mt-auto">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-tighter bg-neutral-100 px-2 py-0.5 rounded">{cat}</span>
          <button className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:underline">
            <MessageCircle size={14} /> Ask / Order
          </button>
        </div>
      </div>
    </div>
  );
}