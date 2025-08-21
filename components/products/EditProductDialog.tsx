// components/EditProductDialog.tsx
'use client';

import * as React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
//import { Input } from "@/components/ui/input";
//import { Label } from "@/components/ui/label";
//import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

type Product = {
  id: number;
  title: string;
  description?: string;
  price: string | number;
  stock_quantity?: number | null;
  image?: string | null; // URL from backend
};

export function EditProductDialog({ product, onUpdated }: {
  product: Product;
  onUpdated?: (p: Product) => void;
}) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description || '');
  const [price, setPrice] = useState(String(product.price));
  const [stockQty, setStockQty] = useState(product.stock_quantity ?? 0);
  const [file, setFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      let res: Response;

      if (file) {
        const form = new FormData();
        form.set('title', title);
        form.set('description', description);
        form.set('price', price);
        form.set('stock_quantity', String(stockQty));
        form.set('image', file);

        res = await fetch(`/api/products/${product.id}`, {
          method: 'PATCH',
          body: form as any,
          // @ts-ignore
          duplex: 'half',
        });
      } else {
        const body = {
          title,
          description,
          price: price === '' ? null : Number(price),
          stock_quantity: Number.isFinite(Number(stockQty)) ? Number(stockQty) : 0,
        };
        res = await fetch(`/api/products/${product.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
      }

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.detail || data?.error || 'Update failed');
      }

      const updated = await res.json();
      onUpdated?.(updated);
      setOpen(false);
    } catch (err: any) {
      setError(err.message || 'Could not update product.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Edit</Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit product</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={title} onChange={e => setTitle(e.target.value)} required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" value={description} onChange={e => setDescription(e.target.value)} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="price">Price (SEK)</Label>
            <Input id="price" type="number" step="0.01" value={price}
                   onChange={e => setPrice(e.target.value)} required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="stock_quantity">Stock</Label>
            <Input id="stock_quantity" type="number" value={stockQty}
                   onChange={e => setStockQty(Number(e.target.value))} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="image">Image (optional)</Label>
            <Input id="image" type="file" accept="image/*"
                   onChange={e => setFile(e.target.files?.[0] || null)} />
            {product.image ? (
              <p className="text-xs text-muted-foreground">Current: {product.image}</p>
            ) : null}
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="flex justify-end gap-2">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" disabled={saving}>{saving ? 'Saving…' : 'Save changes'}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
