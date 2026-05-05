'use client';

import { useState } from 'react';
import AdminSidebar from '../components/saas/admin/AdminSidebar';
import AdminTopbar from '../components/saas/admin/AdminTopbar';


export default function AdminShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 flex">
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Pass state to control visibility on mobile */}
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        {/* Topbar - Pass function to open the menu */}
        <AdminTopbar onMenuClick={() => setSidebarOpen(true)} /> 
        
        <main className="p-4 md:p-6 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}