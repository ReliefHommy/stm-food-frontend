// app/components/shop-landing/ShopMealKits.tsx
import Image from 'next/image';

const API_URL = (process.env.NEXT_PUBLIC_API_BASE || 'https://api.somtammarket.com').replace(/\/+$/, '');
const FALLBACK_IMAGE = '/category/fresh-product.jpeg';

type Product = {
  id: number;
  title: string;
  subtitle?: string;
  image?: string;
  price: string;
};

async function getMealKits(): Promise<{ products: Product[]; failed: boolean }> {
  try {
    const res = await fetch(`${API_URL}/api/food/products/?category=meal-kits`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error(`Products API returned ${res.status}`);
    const data = await res.json();
    const products = Array.isArray(data) ? data : data?.results ?? [];
    return { products, failed: false };
  } catch (err) {
    console.error('Failed to load meal kits', err);
    return { products: [], failed: true };
  }
}

export default async function ShopMealKits() {
  const { products, failed } = await getMealKits();

  if (!failed && products.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <h2 className="font-headline text-3xl md:text-4xl font-semibold text-charcoal text-center mb-10">
        ชุดอาหารพร้อมปรุง
      </h2>

      {failed ? (
        <p className="font-body text-sm text-charcoal-soft text-center">
          โหลดชุดอาหารพร้อมปรุงไม่สำเร็จ กรุณาลองใหม่อีกครั้ง
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center text-center">
              <div className="relative w-full aspect-[4/3] rounded-card overflow-hidden">
                <Image
                  src={product.image || FALLBACK_IMAGE}
                  alt={product.subtitle || product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-body text-base md:text-lg text-charcoal mt-5">
                {product.subtitle || product.title} — {product.price} kr
              </p>
              <button
                type="button"
                className="font-body text-sm font-medium bg-terracotta hover:bg-terracotta-hover text-white px-7 py-3 rounded-full mt-4 transition-colors"
              >
                ซื้อเลย
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
