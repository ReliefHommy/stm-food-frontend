import React from 'react';

export default function StoreHeader() {
  return (
    <div className="space-y-6">
      {/* 1. Store Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm">
        <div className="flex items-center gap-3">
   
          <div>
           <img
          src="/banners/hero_stm_food.png"
          alt="Shop Banner"
          width={1200}
          height={300}
          className="w-full object-cover"
        />
          </div>
        </div>
        
        <div className="flex items-center gap-2">

        </div>
      </div>
      {/* 2. Store Description */}
    </div>
  );
}