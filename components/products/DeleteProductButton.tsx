//app/products/DeleteProductButton.tsx

'use client';

import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function DeleteProductButton({ productId }: { productId: number }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    const confirmed = confirm('Are you sure you want to delete this product?');
    if (!confirmed) return;

    setLoading(true);
    const res = await fetch(`/api/products/${productId}`, { method: 'DELETE' });
    setLoading(false);

    if (res.ok) {
      router.refresh(); // Or mutate() if you use SWR
    } else {
      alert('Delete failed');
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleDelete}
      disabled={loading}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
