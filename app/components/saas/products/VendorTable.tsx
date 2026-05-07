//app/vendors/products/page.tsx

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} 
from "@/components/ui/table"


import Link from "next/link"
import { Button } from '@/components/ui/button'
import { Trash2 } from "lucide-react"

//import { Pencil } from "lucide-react"


export default async function VendorTable() {
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
  <div className="p-6">
    {fetchError ? (
      <div className="mb-4 p-4 rounded bg-red-100 text-red-700">
        {fetchError}. Please try again later.
      </div>
    ) : null}


  

        <><div className="p-6">



      <div className="overflow-x-auto">
        

        <table className="w-full text-left border-collapse">
           <thead>
             <tr className="bg-neutral-50 border-b border-neutral-200">
            <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">Product (สินค้า)</th>
            <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">Subtitle</th>
             <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">Price</th>
             <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">Stock</th>
            <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
                    <tbody className="divide-y divide-neutral-100">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-neutral-50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={p.image} alt={p.title} className="w-12 h-12 rounded-lg object-cover border border-neutral-200" />
                    <div>
                      <p className="font-bold text-neutral-900 text-sm">{p.title}</p>
                      <p className="text-[11px] text-neutral-400">ID: #{p.id.toString().padStart(4, '0')}</p>
                      <p className="text-[11px] text-red-600">{p.price}kr/st</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded-md">{p.description
                  ? p.description.slice(0, 60) +
                    (p.description.length > 60 ? "..." : "")
                  : "-"}</span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-neutral-900">{p.price}</td>
                <td className="px-6 py-4 text-sm text-neutral-600">{p.stock_quantity} units</td>
                <td className="px-6 py-4">{p.category_name}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-neutral-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                   
                      <Link href={`/stm-saas/products/${p.slug}/edit`}>Edit</Link>
                    </button>
                    <button className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>



        </table>

      </div>

    </div><><div className="p-6">


     

    </div></></>

   
  </div>
);
}


