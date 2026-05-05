import React from 'react';
import { Plus, Search, Filter, Download } from 'lucide-react';
import VendorTable from '@/app/components/saas/products/VendorTable';
import Link from 'next/link';



export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Products (สินค้า)</h1>
          <p className="text-sm text-neutral-500">Manage your inventory and stock levels.</p>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm font-semibold text-neutral-700 hover:bg-neutral-50">
            <Download size={18} />
            Export
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-sm font-semibold text-white hover:bg-blue-700 shadow-sm transition-all">
           <Link href="/stm-saas/products/new"><Plus size={18} /></Link>
            Add Product (เพิ่มสินค้า)
          </button>

                
        
      
       
      
        </div>
      </div>

      {/* Filters & Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-neutral-200 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, SKU, or category..." 
            className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-neutral-200 rounded-lg text-sm text-neutral-600 hover:bg-neutral-50">
            <Filter size={16} />
            Filters
          </button>
          <select className="flex-1 md:flex-none px-4 py-2 border border-neutral-200 rounded-lg text-sm text-neutral-600 bg-white outline-none">
            <option>All Categories</option>
            <option>Salads</option>
            <option>Noodles</option>
            <option>Soups</option>
          </select>
        </div>
      </div>

      {/* The Product Table Component */}
     
      <VendorTable />
           
    
    </div>
  );
}