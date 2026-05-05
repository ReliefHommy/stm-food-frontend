import React from 'react';
import { PlusCircle, Upload, Eye, FileText, ArrowUpRight } from 'lucide-react';

import SaaSModuleGrid from '@/app/components/saas/home/SaaSModuleGrid';
import StoreStatsGrid from '@/app/components/saas/home/StoreStatsGrid';



export default function DashboardPage() {
  return (
    
    <div className="max-w-7xl mx-auto space-y-8">
     
      {/* 1. Welcome Panel */}
      <header className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
        <h1 className="text-2xl font-bold text-neutral-900">Sawasdee! ยินดีต้อนรับ</h1>
        <p className="text-neutral-500 mt-1">Here is what's happening with your store today.</p>
      </header>

      {/* 2. Store Summary */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-neutral-800">Store Summary</h2>
        </div>
        <StoreStatsGrid />
      </section>

      {/* 3. Quick Actions */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <QuickActionBtn icon={<PlusCircle size={18}/>} label="Add Product" desc="เพิ่มสินค้าใหม่" />
        <QuickActionBtn icon={<Upload size={18}/>} label="Upload CSV" desc="อัปโหลดไฟล์" />
        <QuickActionBtn icon={<Eye size={18}/>} label="Preview Catalogue" desc="ดูแคตตาล็อก" />
        <QuickActionBtn icon={<FileText size={18}/>} label="Generate Label" desc="สร้างฉลากสินค้า" />
      </section>

      {/* 4. 6 SaaS Module Cards[cite: 1] */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-lg font-semibold text-neutral-800">Your Tools (เครื่องมือของคุณ)</h2>
        </div>
        <SaaSModuleGrid />
      </section>
    </div>
  );
}

function QuickActionBtn({ icon, label, desc }: { icon: React.ReactNode, label: string, desc: string }) {
  return (
    <button className="flex items-center gap-3 p-4 bg-white border border-neutral-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all text-left group">
      <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-neutral-900">{label}</p>
        <p className="text-[11px] text-neutral-500 uppercase tracking-wider">{desc}</p>
      </div>
    </button>
  );
}