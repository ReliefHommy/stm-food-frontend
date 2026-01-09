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
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/food/products/${slug}`, {
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
      <><ShopNavbar /><div className="max-w-7xl mx-auto px-4 py-10">


      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-4">
        <span className="text-green-600">Home</span> / {product.title}
      </div>

      {/* Main Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Image */}
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="relative aspect-square rounded overflow-hidden">
                <Image
                  src={`/products/thumb-${i + 1}.jpg`}
                  alt={`thumb-${i + 1}`}
                  fill
                  className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-500 mt-1">      Brand | Unit | Code:00000| 440 g.
          </p>

          <p className="text-green-700 font-semibold text-2xl mt-4">{product.price} kr</p>

          <p className="mt-4 text-gray-700">{product.description}</p>

          <div className="mt-4 flex items-center space-x-2">
            <label htmlFor="quantity" className="text-sm text-gray-700">
              Antal:
            </label>
            <input
              id="quantity"
              type="number"
              min={1}
              value={1}
              readOnly
              className="w-16 border rounded px-2 py-1" />
          </div>

          <button

            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Lägg i varukorg
          </button>
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">SKU: N/A Categories:</h2>

          </div>
        </div>

        {/* 5. Long Description Tabs */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Produktinformation</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              Red Curry Paste med autentisk thailändsk smak. Perfekt för curryrätter, soppor och marinader.
            </p>
            <p className="font-medium mt-2">Ingredienser:</p>
            <p>Brand | Unit | Code:00000| 440 g.
            </p>
            <p className="font-medium mt-2">Användningstips:</p>
            <p>
              Fräs pastan i olja och tillsätt kokosmjölk, grönsaker och kött eller tofu. Servera med ris.
            </p>
          </div>


          {/* 6. Related Products */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Liknande produkter</h2>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="min-w-[160px] border rounded shadow hover:shadow-md transition p-2 flex-shrink-0"
                >
                  <div className="relative w-full h-32 rounded-md overflow-hidden mb-2">
                    <Image
                      src="/products/grid-view.jpg"
                      alt="Curry"
                      fill
                      className="object-cover" />
                  </div>
                  <p className="text-sm font-medium text-gray-800">Green Curry Paste</p>
                  <p className="text-xs text-gray-500">Mae Ploy · 400g</p>
                  <p className="text-sm text-green-700 font-semibold mt-1">45 kr</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div></>
  );
}
