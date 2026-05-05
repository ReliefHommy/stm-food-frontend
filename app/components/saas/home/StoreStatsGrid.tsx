import React from 'react';
import { Package, FolderTree, ShoppingBag, Eye } from 'lucide-react';

const stats = [
  {
    label: 'Total Products',
    thaiLabel: 'สินค้าทั้งหมด',
    value: '124',
    icon: <Package size={20} />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    label: 'Categories',
    thaiLabel: 'หมวดหมู่',
    value: '12',
    icon: <FolderTree size={20} />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    label: 'Total Orders',
    thaiLabel: 'คำสั่งซื้อ',
    value: '48',
    icon: <ShoppingBag size={20} />,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    label: 'Catalogue Views',
    thaiLabel: 'จำนวนคนเข้าชม',
    value: '1,240',
    icon: <Eye size={20} />,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
];

export default function StoreStatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div 
          key={stat.label} 
          className="bg-white border border-neutral-200 p-5 rounded-2xl shadow-sm flex items-center gap-4"
        >
          <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.color}`}>
            {stat.icon}
          </div>
          <div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-neutral-900 leading-tight">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                {stat.label}
              </span>
              <span className="text-[10px] text-neutral-400 font-normal">
                ({stat.thaiLabel})
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}