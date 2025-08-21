//app/dashboard/layout.tsx

import { ReactNode } from 'react'
import Link from 'next/link'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-6 space-y-6 shadow-md">
        <h4 className="text-sm font-bold text-gray-800">Dashboard</h4>
        <nav className="flex flex-col gap-2 text-blue-600 font-medium">
          <Link href="/dashboard"className="hover:underline">Overview</Link>
          <Link href="/dashboard/products"className="hover:underline">My Products</Link>
          <Link href="/dashboard/orders" className="hover:underline">Orders</Link>
        </nav>
       
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white p-8">
        {children}
      </main>
    </div>
  )
}
