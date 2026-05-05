import React from 'react';
import { Share2, Smartphone, Monitor, ExternalLink, Globe } from 'lucide-react';

export default function CataloguePreview() {
  return (
    <div className="space-y-6">
      {/* 1. Control Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-neutral-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <Globe size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-neutral-900">Your Live Catalogue</h3>
            <p className="text-xs text-neutral-500">stm-market.eu/thai-kitchen-eu</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex bg-neutral-100 p-1 rounded-lg mr-2">
            <button className="p-1.5 bg-white shadow-sm rounded-md text-blue-600"><Smartphone size={16} /></button>
            <button className="p-1.5 text-neutral-400"><Monitor size={16} /></button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all">
            <Share2 size={16} />
            Share (แชร์ร้าน)
          </button>
        </div>
      </div>

      {/* 2. The Mock Phone Frame */}
      <div className="flex justify-center py-10 bg-neutral-100 rounded-3xl border-2 border-dashed border-neutral-300">
        <div className="w-[360px] h-[740px] bg-white rounded-[3rem] border-[8px] border-neutral-900 shadow-2xl overflow-hidden relative">
          {/* Internal Mobile Content */}
          <div className="h-full overflow-y-auto hide-scrollbar">
            {/* Store Header */}
            <div className="h-40 bg-orange-500 relative">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400" 
                className="w-full h-full object-cover opacity-60" 
                alt="Thai Food"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h2 className="text-white text-xl font-bold">Thai Kitchen EU</h2>
                <p className="text-white/80 text-xs">Authentic Flavors (รสชาติดั้งเดิม)</p>
              </div>
            </div>

            {/* Product List In Catalogue */}
            <div className="p-4 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-neutral-900 border-b-2 border-orange-500 pb-1">Recommended</h3>
              </div>

              <CatalogueItem 
                name="Somtum Thai" 
                price="€12.50" 
                img="https://placehold.co/100x100?text=Somtum" 
              />
              <CatalogueItem 
                name="Pad Thai Goong" 
                price="€14.90" 
                img="https://placehold.co/100x100?text=PadThai" 
              />
              <CatalogueItem 
                name="Tom Yum Goong" 
                price="€16.00" 
                img="https://placehold.co/100x100?text=TomYum" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CatalogueItem({ name, price, img }: { name: string, price: string, img: string }) {
  return (
    <div className="flex gap-4 items-center border-b border-neutral-100 pb-4">
      <img src={img} className="w-20 h-20 rounded-xl object-cover" alt={name} />
      <div className="flex-1">
        <h4 className="font-bold text-neutral-800 text-sm">{name}</h4>
        <p className="text-orange-600 font-bold text-sm mt-1">{price}</p>
        <button className="mt-2 w-full py-1.5 border border-neutral-200 rounded-lg text-[10px] font-bold text-neutral-600">
          View Ingredients
        </button>
      </div>
    </div>
  );
}