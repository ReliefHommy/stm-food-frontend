import React from 'react';
import { QrCode, Copy, Download, Share2, Facebook } from 'lucide-react';

export default function ShareCatalogueBox() {
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-green-50 text-green-600 rounded-lg">
          <Share2 size={20} />
        </div>
        <h3 className="font-bold text-neutral-900 text-lg">Share Your Store (แชร์ร้านของคุณ)</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* QR Code Section */}
        <div className="flex flex-col items-center p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
          <div className="bg-white p-4 rounded-xl shadow-inner mb-4">
            <QrCode size={160} className="text-neutral-900" />
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline">
            <Download size={16} /> Download QR Code
          </button>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 block">
              Direct Link (ลิงก์ร้าน)
            </label>
            <div className="flex gap-2">
              <input 
                readOnly 
                value="stm-market.eu/thai-kitchen"
                className="flex-1 px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-lg text-sm text-neutral-600 outline-none"
              />
              <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                <Copy size={20} />
              </button>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-xs text-neutral-500 mb-3">Promote on Social Media:</p>
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#1877F2] text-white rounded-lg font-semibold text-sm">
                <Facebook size={18} /> Facebook
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-black text-white rounded-lg font-semibold text-sm">
                <span className="font-bold text-lg leading-none">X</span> Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}