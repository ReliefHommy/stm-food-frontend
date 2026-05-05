'use client';

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react'; // Add X to icons
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  BookOpen, 
  Tag, 
  Palette, 
  FileText, 
  ShoppingCart, 
  Settings,
  Sparkles
} from 'lucide-react';

interface AdminSidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const menuItems = [
  { name: 'Dashboard', href: '/stm-saas', icon: LayoutDashboard, status: 'ready' },
  { name: 'Products', href: '/stm-saas/products', icon: Package, status: 'ready' },
  { name: 'Catalogue Preview', href: '/stm-saas/catalogue', icon: BookOpen, status: 'ready' },
  { name: 'Food Labels', href: '/stm-saas/labels', icon: Tag, status: 'beta' },
  { name: 'Brand Builder', href: '/stm-saas/brand', icon: Palette, status: 'beta' },
  { name: 'Content Generator', href: '/stm-saas/content', icon: Sparkles, status: 'coming soon' },
  { name: 'Orders', href: '/stm-saas/orders', icon: ShoppingCart, status: 'coming soon' },
  { name: 'Settings', href: '/stm-saas/settings', icon: Settings, status: 'ready' },
];

export default function AdminSidebar({ isOpen, setIsOpen }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-neutral-200 
      transform transition-transform duration-300 ease-in-out
      lg:translate-x-0 lg:static lg:flex lg:flex-col
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-neutral-100">
        <span className="text-xl font-bold text-blue-600">STM SaaS</span>
        {/* Close button for mobile */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(false)}>
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className={isActive ? 'text-blue-600' : 'text-neutral-400'} />
                <span className="font-medium text-sm">{item.name}</span>
              </div>
              
              {/* Status Badges based on April 2026C.pdf */}
              {item.status === 'beta' && (
                <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold uppercase">
                  Beta
                </span>
              )}
              {item.status === 'coming soon' && (
                <span className="text-[10px] bg-neutral-100 text-neutral-500 px-1.5 py-0.5 rounded font-bold uppercase">
                  Soon
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Support / Help Section - Important for non-tech users */}
      <div className="p-4 border-t border-neutral-100">
        <div className="bg-neutral-50 rounded-lg p-3">
          <p className="text-xs text-neutral-500 mb-2">Need help? (ช่วยเหลือ)</p>
          <button className="w-full py-2 bg-white border border-neutral-200 text-xs font-semibold rounded shadow-sm hover:bg-neutral-50">
            Contact Support
          </button>
        </div>
      </div>
    </aside>
  );
}
