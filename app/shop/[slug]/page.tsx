// app/shop/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ShopNavbar from '@/app/components/shop/ShopNavbar';

type Product = {
  id: number;
  title: string;
  slug: string;
  price: string;
  description: string;
  image: string;
  subtitle?: string;
};

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`, {
      cache: 'no-store',
    });

    if (!res.ok) return null;

    return res.json();
  } catch (err) {
    return null;
  }
}

// ✅ Async Server Component with awaited params
export default async function ProductDetailPage(props: { params: { slug: string } }) {
  const { slug } = await Promise.resolve(props.params); // <-- fix here

  const product = await getProduct(slug);
   if (!product) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <ShopNavbar />

      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-4">
        <span className="text-green-600">Home</span> / {product.title}
      </div>

      {/* Main Layout */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Image */}
        <div className="relative w-full h-96 rounded overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-500 mt-1">{product.subtitle || ''}</p>

          <p className="text-green-700 font-semibold text-2xl mt-4">{product.price} kr</p>

          <p className="mt-4 text-gray-700">{product.description}</p>

          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Lägg i varukorg
          </button>
        </div>
      </div>
    </div>
  );
}
