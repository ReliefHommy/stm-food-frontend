// app/recipe/[slug]/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function RecipePage() {
  return (
    
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
                  {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-4">
        <Link href="" className="text-green-600 hover:underline">Home</Link> / 
        <Link href="" className="text-green-600 hover:underline ml-1">Category</Link> / 
        <span className="ml-1 text-gray-700 font-medium">RecipeName</span>
      </div>
      {/* Featured Image */}
      <div className="h-40 flex items-center justify-center w-full h-64 relative rounded shadow overflow-hidden ">
        <Image
          src="/recipes/shrimp-green-curry.jpg"
          alt="Thai Basil Chicken"
          width={480} height={340}
          className="object-cover"
        />
      </div>

      {/* Title & Meta */}
      <div>
        <h1 className="text-3xl font-bold mb-1 text-center">Shrimp Green Curry</h1>
        <p className="text-sm text-gray-600 text-center">by STM Food · 30 mins</p>
      </div>

      {/* Ingredients */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-center">Ingredienser</h2>
        <ul className="space-y-2 list-disc ml-5 text-gray-800">
          {[
            { name: '400g kycklingfärs', link: '/product/chicken-mince' },
            { name: '3 vitlöksklyftor, hackade', link: '' },
            { name: '2 röda chili', link: '' },
            { name: '1 msk ostronsås', link: '/product/oyster-sauce' },
            { name: '1 msk fisksås', link: '/product/fish-sauce' },
            { name: '1 tsk sojasås', link: '/product/soy-sauce' },
            { name: '1 näve thaibasilika', link: '/product/holy-basil' },
          ].map((item, i) => (
            <li key={i}>
              {item.link ? (
                <Link href={item.link} className="text-green-600 hover:underline">
                  {item.name} – Visa produkt
                </Link>
              ) : (
                item.name
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Instruktioner</h2>
        <ol className="list-decimal space-y-2 ml-5 text-gray-800">
          <li>Fräs vitlök och chili i lite olja tills doftande.</li>
          <li>Tillsätt kycklingfärs och bryn tills genomstekt.</li>
          <li>Tillsätt såserna och rör om väl.</li>
          <li>Vänd ner thaibasilika och ta bort från värmen.</li>
          <li>Servera med ris och toppa med stekt ägg om så önskas.</li>
        </ol>
      </div>

      {/* Optional: Nutrition Info */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Näringsinformation (per portion)</h2>
        <ul className="text-gray-700 space-y-1">
          <li>Kalorier: 420 kcal</li>
          <li>Protein: 30g</li>
          <li>Fett: 18g</li>
          <li>Kolhydrater: 35g</li>
        </ul>
      </div>

      {/* Related Recipes */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Relaterade recept</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="rounded overflow-hidden shadow hover:shadow-md transition"
            >
              <div className="relative w-full h-32">
                <Image
                  src={`/recipes/thumb-${i + 1}.jpg`}
                  alt={`thumb-${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2 text-sm font-medium text-gray-800">
                Tom Yum Soup
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-100 text-center py-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Köp alla ingredienser enkelt</h3>
        <Link
          href="/shop"
          className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Handla nu
        </Link>
      </div>
    </div>
  );
}

