//app/dashboard/layout.tsx
'use client';
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
const items = [
  { href: '/user/dashboard', label: 'Dashboard', icon: '🏠' },
  { href: '/user/products',  label: 'My Products', icon: '📦' },
  { href: '/user/products/new', label: 'Add Product', icon: '➕' },
  { href: '/userprofiles/orders',    label: 'Orders',   icon: '📜' },
  { href: '/user/settings',  label: 'Settings', icon: '⚙️' },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
    <aside className="w-64 shrink-0 border-r bg-black">
      <div className="p-4 text-xl font-extrabold text-green-700">STM FOOD</div>
      <nav className="px-2 pb-4 space-y-1">
        {items.map((it) => {
          const active = pathname.startsWith(it.href);
          return (
            <Link
              key={it.href}
              href={it.href}
              className={`flex items-center gap-3 rounded px-3 py-2 text-sm
                ${active ? 'bg-green-50 text-white font-semibold' : 'hover:bg-green-50 text-white'}`}
            >
              <span>{it.icon}</span>
              <span>{it.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white p-8">
        {children}
      </main>
    </div>
  )
}
