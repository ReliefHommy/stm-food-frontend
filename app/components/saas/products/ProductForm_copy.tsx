import React from 'react';
import { Camera, Save, X, Info } from 'lucide-react';





export default function ProductForm() {
  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Form Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Add New Product (เพิ่มสินค้าใหม่)</h1>
          <p className="text-sm text-neutral-500">Enter the details for your shop catalogue.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-neutral-600 hover:bg-neutral-100 rounded-lg">
            Cancel
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-md transition-all">
            <Save size={18} />
            Save Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Product Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section 1: Basic Details */}
          <section className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
            <h2 className="text-lg font-bold text-neutral-800 mb-4 border-b pb-2">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">
                  Product Name (ชื่อสินค้า) *
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Somtum Thai"
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">
                  Description (รายละเอียด)
                </label>
                <textarea 
                  rows={4}
                  placeholder="Tell customers about your dish or product..."
                  className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Pricing & Stock */}
          <section className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
            <h2 className="text-lg font-bold text-neutral-800 mb-4 border-b pb-2">Pricing & Inventory</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">Price (€)</label>
                <input type="number" placeholder="0.00" className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">Stock Level</label>
                <input type="number" placeholder="0" className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl outline-none" />
              </div>
            </div>
          </section>
        </div>

        {/* Right Side: Media & Category */}
        <div className="space-y-6">
          {/* Product Image */}
          <section className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm text-center">
            <h2 className="text-sm font-bold text-neutral-800 mb-4 text-left">Product Image</h2>
            <div className="border-2 border-dashed border-neutral-200 rounded-2xl p-8 hover:bg-neutral-50 transition-colors cursor-pointer group">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-full mb-3 group-hover:scale-110 transition-transform">
                  <Camera size={32} />
                </div>
                <p className="text-sm font-bold text-neutral-700">Upload Photo</p>
                <p className="text-xs text-neutral-400 mt-1">PNG, JPG up to 10MB</p>
              </div>
            </div>
          </section>

          {/* Category Selection */}
          <section className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
            <h2 className="text-sm font-bold text-neutral-800 mb-4">Organization</h2>
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1 text-left">Category</label>
              <select className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl outline-none">
                <option>Select Category</option>
                <option>Salads</option>
                <option>Noodles</option>
                <option>Main Course</option>
              </select>
            </div>
          </section>

          {/* Tips Panel */}
          <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex gap-3">
            <Info className="text-amber-500 shrink-0" size={20} />
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Tip:</strong> Good photos help you sell more! Make sure the lighting is bright.
              <br/>(รูปถ่ายที่สวยงามช่วยให้คุณขายดีขึ้น!)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}