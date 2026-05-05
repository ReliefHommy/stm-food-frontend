import React from 'react';
import { Tag, AlertTriangle, CheckCircle2, QrCode } from 'lucide-react';

export default function FoodLabelHelper() {
  const allergens = [
    "Crustaceans (กุ้ง/กั้ง/ปู)", "Eggs (ไข่)", "Fish (ปลา)", "Peanuts (ถั่วลิสง)", 
    "Soybeans (ถั่วเหลือง)", "Milk (นม)", "Gluten (แป้งสาลี)"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      <div className="bg-blue-600 rounded-2xl p-6 text-white">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Tag /> Food Label Helper (ตัวช่วยสร้างฉลาก)
        </h2>
        <p className="text-blue-100 text-sm mt-1">Generate EU-compliant labels for your food products.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ingredient Input */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-neutral-900 mb-4">Ingredients (ส่วนผสม)</h3>
          <textarea 
            rows={5}
            className="w-full p-4 bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients separated by commas... (e.g. Rice, Chili, Fish Sauce)"
          />
          <p className="text-[10px] text-neutral-400 mt-2 italic">
            Note: EU law requires highlighting allergens in bold.
          </p>
        </div>

        {/* Allergen Checklist */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <AlertTriangle size={18} className="text-amber-500" /> Allergens (สารก่อภูมิแพ้)
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {allergens.map((item) => (
              <label key={item} className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-neutral-100">
                <input type="checkbox" className="w-4 h-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-neutral-700">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Label Preview Card */}
      <div className="bg-neutral-900 text-white rounded-2xl p-8 max-w-sm mx-auto shadow-xl">
        <div className="border-b border-neutral-700 pb-4 mb-4 text-center">
          <h4 className="font-bold uppercase tracking-widest">Somtum Thai</h4>
          <p className="text-[10px] text-neutral-400">Manufactured by Thai Kitchen EU</p>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-[10px] uppercase font-bold text-neutral-500">Ingredients:</p>
            <p className="text-xs leading-relaxed">
              Papaya, Chili, Lime, **Fish Sauce**, **Peanuts**, Palm Sugar, Garlic.
            </p>
          </div>
          <div className="bg-white/5 p-3 rounded-lg border border-white/10">
            <p className="text-[10px] font-bold text-amber-400 uppercase mb-1">Contains Allergens:</p>
            <div className="flex flex-wrap gap-1">
              <span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded font-bold">FISH</span>
              <span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded font-bold">PEANUTS</span>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
           <div className="bg-white p-1 rounded">
             <QrCode size={40} className="text-black" />
           </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <button className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-lg transition-all">
          <CheckCircle2 size={20} /> Generate PDF Label
        </button>
      </div>
    </div>
  );
}