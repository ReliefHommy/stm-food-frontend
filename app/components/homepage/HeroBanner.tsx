// app/components/HeroBanner.tsx
import Link from 'next/link';


export default function HeroBanner() {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/Healthy Food_03.png')" }} // Replace with your real image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 text-white p-6 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Bring Thai Flavors to Your Kitchen
        </h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium transition"
          >
            Shop Now
          </Link>
          <Link
            href="/recipes"
            className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded font-medium transition"
          >
            Explore Recipes
          </Link>
        </div>
      </div>
    </section>
  );
}


