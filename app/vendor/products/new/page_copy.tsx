'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { title } from 'process';

type FormState = {
  stockQuantity: any;
  name: string;         // maps to Django "title"
  description: string;
  price: string;        // keep string for controlled input -> number on submit
  stock: string;        // keep string -> int on submit
  //image: string;        // URL for later; NOT sent to backend yet
};

export default function NewProductPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    stockQuantity: '', // Add this line to match FormState
    name: '',
    description: '',
    price: '',
    stock: '',
    //image: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
    };

    const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  };

// A simple Validdate form inputs - can expaned later

  const validate = () => {
    if (!form.name.trim()) return 'Name is required.';
    const priceNum = Number(form.price);
    if (Number.isNaN(priceNum) || priceNum <= 0) return 'Price must be a positive number.';
    const stockNum = Number(form.stock);
    if (!Number.isInteger(stockNum) || stockNum < 0) return 'Stock must be a non-negative integer.';
    

    if (!imageFile) return 'Please choose an image file.'

     
    return null;
  };
//Use formData to Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving) return;
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSaving(true);
    try {

// Build FormData for Django (expects file upload for `image`)
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', form.description);
      formData.append('price', form.price.toString());
      formData.append('stock_quantity',  form.stockQuantity.toString());
      if (imageFile) 
        formData.append('image', imageFile); // <-- real file

      

      const res = await fetch('/api/products', {
        method: 'POST',
        //headers: { 'Content-Type': 'application/json' },
        body: formData,
      });

      if (!res.ok) {
      const data = await res.json();
      setError(data?.error || 'Failed to add product');
      return;
    }





      // Success → go back to vendor product list (or push to detail if you have it)
      router.push('/vendor/products');
    } catch (err: any) {
      setError(err?.message || 'An error occurred while saving the product.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Add Product</h1>

      {error && (
        <div className="mb-4 rounded-md border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
        <div>
          <label className="block text-sm font-medium mb-1">Name *</label>
          <input
            type="text"
            className="w-full rounded-md border px-3 py-2 text-white"
            value={form.name}
            onChange={onChange('name')}
            placeholder="e.g., Mae Ploy Sweet Chili Sauce"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full text-white rounded-md border px-3 py-2 min-h-[100px]"
            value={form.description}
            onChange={onChange('description')}
            placeholder="Optional short description"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Price (SEK) *</label>
            <input
              type="number"
              step="0.01"
              min="0"
              className="w-full rounded-md border px-3 py-2 text-white"
              value={form.price}
              onChange={onChange('price')}
              placeholder="e.g., 39.90"
              required
              inputMode="decimal"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Stock *</label>
            <input
              type="number"
              step="1"
              min="0"
              className="w-full rounded-md border px-3 py-2 text-white"
              value={form.stock}
              onChange={onChange('stock')}
              placeholder="e.g., 120"
              required
              inputMode="numeric"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image URL (not sent yet)</label>
          <input
           type="file"
            accept="image/*"
            onChange={onImageChange}
            className="w-full rounded-md border px-3 py-2 bg-white text-sm"
            placeholder="Add an image"
          />
          {imagePreview && (
            <div className="mt-3">
              <img src={imagePreview} alt="preview" className="h-28 w-auto rounded-md border" />
            </div>
          )}



          <p className="mt-1 text-xs text-gray-500">
             JPG/PNG recommended. We’ll move to S3 later with presigned uploads.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:opacity-60"
          >
            {saving ? 'Saving…' : 'Create Product'}
          </button>

          <button
            type="button"
            onClick={() => router.push('/vendor/products')}
            className="rounded-md border px-4 py-2 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}


