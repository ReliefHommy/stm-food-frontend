'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/vendor/dashboard', label: 'Dashboard', icon: '🏠' },
  { href: '/vendor/products',  label: 'My Products', icon: '📦' },
  { href: '/vendor/products/new', label: 'Add Product', icon: '➕' },
  { href: '/vendor/orders',    label: 'Orders',   icon: '📜' },
  { href: '/vendor/settings',  label: 'Settings', icon: '⚙️' },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 shrink-0 border-r bg-black text-white">
      <div className="p-4 text-xl font-extrabold text-green-700">STM FOOD</div>
      <nav className="px-2 pb-4 space-y-1">
        {items.map((it) => {
          const active = pathname.startsWith(it.href);
          return (
            <Link
              key={it.href}
              href={it.href}
              className={`flex items-center gap-3 rounded px-3 py-2 text-sm
                ${active ? 'bg-green-50 text-green-700 font-semibold' : 'hover:bg-gray-50 text-white'}`}
            >
              <span>{it.icon}</span>
              <span>{it.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
