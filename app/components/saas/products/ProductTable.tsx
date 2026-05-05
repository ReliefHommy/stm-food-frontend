


import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'




import { Edit2, Trash2 } from "lucide-react"
import Link from 'next/link'


//import { Pencil } from "lucide-react"


export default async function ProductsPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('access_token')
  const API_URL = process.env.API_URL || 'https://api.somtammarket.com';

  if (!token?.value) {
    redirect('/login')
  }

  type Product = {
    [x: string]: any
    id: string | number
    title?: string
    subtitle?: string
    price?: number
    stock_quantity?: number
    category_name?: string
    image?: string
  }

  let products: Product[] = []
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
      redirect('/stm-saas') // or show a friendly error page/component
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
    redirect('/stm-saas')
  }

  return (
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
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-neutral-600 bg-neutral-100 px-2 py-1 rounded-md">{p.subtitle}</span>
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
     
     
  )
}