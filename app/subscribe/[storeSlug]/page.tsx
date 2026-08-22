// app/subscribe/[storeSlug]/page.tsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import SubscribeBoxClient, { type SubscriptionProduct } from './SubscribeBoxClient';

const API_URL = (process.env.NEXT_PUBLIC_API_BASE || 'https://api.somtammarket.com').replace(/\/+$/, '');

type Store = {
  id: number | string;
  slug: string;
  name?: string;
};

type Ctx = { params: Promise<{ storeSlug: string }> };

export default async function SubscribePage({ params }: Ctx) {
  const { storeSlug } = await params;

  const cookieStore = await cookies();
  const token = cookieStore.get('access_token')?.value;

  if (!token) {
    redirect('/login');
  }

  let store: Store | null = null;
  try {
    const res = await fetch(`${API_URL}/api/food/stores/${encodeURIComponent(storeSlug)}/`, {
      cache: 'no-store',
    });
    if (res.ok) {
      store = await res.json();
    }
  } catch (err) {
    console.error('Failed to fetch store', err);
  }

  let products: SubscriptionProduct[] = [];
  try {
    const res = await fetch(
      `${API_URL}/api/food/products/?store=${encodeURIComponent(storeSlug)}&is_subscription_eligible=true`,
      { cache: 'no-store' }
    );
    if (res.ok) {
      const data = await res.json();
      products = Array.isArray(data) ? data : Array.isArray(data?.results) ? data.results : [];
    }
  } catch (err) {
    console.error('Failed to fetch subscription-eligible products', err);
  }

  return (
    <SubscribeBoxClient
      storeSlug={storeSlug}
      storeId={store?.id ?? storeSlug}
      storeName={store?.name ?? storeSlug}
      initialProducts={products}
    />
  );
}
