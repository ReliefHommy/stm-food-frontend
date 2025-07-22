'use client';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    name: 'Rice & Noodles',
    href: '/shop?category=rice-noodles',
    image: '/category/healthy-food-04.png',
  },
  {
    name: 'Curry Pastes',
    href: '/shop?category=curry-pastes',
    image: '/category/healthy-food-04.png',
  },
  {
    name: 'Fresh Herbs',
    href: '/shop?category=fresh-herbs',
    image: '/category/healthy-food-04.png',
  },
  {
    name: 'Snacks',
    href: '/shop?category=snacks',
    image: '/category/healthy-food-04.png',
  },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Featured Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image block */}
              <div className="h-40 flex items-center justify-center">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={150} // Provide an appropriate width
  height={150}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text block */}
              <div className="p-4 text-center">
                <span className="block text-lg font-medium text-gray-800">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

