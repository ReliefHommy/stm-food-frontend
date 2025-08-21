// components/product/EditProductDialogWrapper.tsx
'use client';

import { EditProductDialog } from './EditProductDialog';
import { useRouter } from 'next/navigation';

export function EditProductDialogWrapper({ product }: { product: any }) {
  const router = useRouter();

  return (
    <EditProductDialog
      product={product}
      onUpdated={() => {
        router.refresh(); // Refresh data (if using server-side list)
      }}
    />
  );
}
