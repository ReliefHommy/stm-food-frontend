// app/components/shop-landing/ShopCategoryGrid.tsx
import Image from 'next/image';

const API_URL = (process.env.NEXT_PUBLIC_API_BASE || 'https://api.somtammarket.com').replace(/\/+$/, '');
const FALLBACK_IMAGE = '/category/fresh-product.jpeg';

type Category = {
  id: number;
  name: string;
  thai_name?: string;
  slug: string;
  image?: string;
};

async function getCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${API_URL}/api/food/categories/`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error(`Categories API returned ${res.status}`);
    const data = await res.json();
    return Array.isArray(data) ? data : data?.results ?? [];
  } catch (err) {
    console.error('Failed to load categories', err);
    return [];
  }
}

export default async function ShopCategoryGrid() {
  const categories = await getCategories();

  if (categories.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <h2 className="font-headline text-3xl md:text-4xl font-semibold text-charcoal text-center mb-10">
        หมวดหมู่สินค้า
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-cream-card border border-hairline rounded-card overflow-hidden flex flex-col items-center text-center"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={category.image || FALLBACK_IMAGE}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="px-3 pt-4 pb-4">
              <p className="font-body text-sm md:text-base font-medium text-charcoal">
                {category.thai_name || category.name}
              </p>
              <p className="font-body text-xs text-charcoal-soft">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
