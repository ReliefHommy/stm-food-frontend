//app/dashboard/layout.tsx
'use client';
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'

const items = [
  { href: '/userprofiles', label: 'Profile', icon: '👤' },
  { href: '/userprofiles/orders',  label: 'My Orders', icon: '📦' },
  { href: '/userprofiles/Wishlists',    label: 'Wishlist',   icon: '❤️' },
   { href: '/partner/subscribe',    label: ' Sell in STM',   icon: '🚪' },
  { href: '/userprofiles/settings',  label: 'Settings', icon: '⚙️' },
];

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include',
    })
    window.location.href = '/login'
  }



  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-gray-50">
      {/* Sidebar */}
    <aside className="sm:w-64 w-full bg-white border-r p-4 shadow-sm">
      <div className="text-2xl font-extrabold text-green-700 mb-4">STM FOOD</div>
      <nav className="space-y-1">
        {items.map((it) => {
          const active = pathname.startsWith(it.href);
          return (
            <Link
              key={it.href}
              href={it.href}
              className={`flex items-center gap-2 rounded px-3 py-2 text-sm transition
                ${active
                   ? 'bg-green-100 text-green-800 font-semibold' 
                   : 'text-gray-600 hover:bg-green-50 hover:text-green-700'}`}
            >
              <span>{it.icon}</span>
              <span>{it.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  {/* Top-right Logout */}
      <button
        onClick={handleLogout}
        className="absolute top-4 right-6 bg-red-600 text-white px-4 py-1 text-sm rounded hover:bg-red-700"
      >
        Logout
      </button>

      {/* Main Content */}
      <main className="flex-1 p-4 p-8">
        {children}
      </main>
    </div>
  )
}
