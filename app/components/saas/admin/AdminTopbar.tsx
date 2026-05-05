import React from 'react';
import { Bell, User, Search, Menu } from 'lucide-react';

export default function AdminTopbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="h-16 border-b border-neutral-200 bg-white sticky top-0 z-40 flex items-center justify-between px-4 md:px-8">
  {/* Mobile Menu Toggle - NOW FUNCTIONAL */}
      <button
      onClick={onMenuClick}
      className="lg:hidden p-2 text-neutral-600 hover:bg-neutral-100 rounded-md transition-colors">
        <Menu size={24} />
      </button>

      {/* Breadcrumb / Current Location */}
      <div className="hidden md:flex items-center gap-2 text-sm text-neutral-500">
        <span>STM SaaS</span>
        <span>/</span>
        <span className="font-medium text-neutral-900">Dashboard</span>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Search - Helpful for vendors with many products */}
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
          <input 
            type="text" 
            placeholder="Search products..."
            className="pl-9 pr-4 py-1.5 bg-neutral-100 border-transparent rounded-full text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all outline-none w-48 lg:w-64"
          />
        </div>

        {/* Notifications */}
        <button className="p-2 text-neutral-500 hover:bg-neutral-50 rounded-full relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Vendor Profile */}
        <div className="flex items-center gap-3 pl-2 border-l border-neutral-200">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-neutral-900">Thai Kitchen EU</p>
            <p className="text-[10px] text-green-600 font-medium">Store Online</p>
          </div>
          <button className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 hover:ring-4 hover:ring-blue-50 transition-all">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
