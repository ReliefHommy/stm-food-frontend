import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const newAddProductsData = [
   {
    id: 1,
    title: "Malee Coconut Water, 100% Nam hom, 1lb",
    image: "/category/beverages.png",
    price: "37.88",
    oldPrice: "44.54",
    discount: "15%",
    rating: 2.67,
  },
  {
    id: 2,
    title: "Aroy-D Bamboo Shoot, In Water,80 oz",
    image: "/category/Canned-Preserved-Foods.jpg",
    price: "11.59",
    oldPrice: "18.88",
    discount: "39%",
    rating: 4.0,
  },
    {
    id: 3,
    title: "Darin Stick Rice Durain, 100% Coconut milk,150g",
    image: "/category/desserts-sweets.png",
    price: "11.59",
    oldPrice: "18.88",
    discount: "39%",
    rating: 4.0,
  },
      {
    id: 4,
    title: "Fresh Puk Ka Na, 100% Organic,150g",
    image: "/category/fresh-product.jpeg",


    price: "11.59",
    oldPrice: "18.88",
    discount: "39%",
    rating: 4.0,
  },
       {
    id: 5,
    title: "Frozen Cutted, Blue Swimming Crab,150g",
    image: "/category/frozen-foods.png",
    price: "11.59",
    oldPrice: "18.88",
    discount: "39%",
    rating: 4.0,
  },
         {
    id: 6,
    title: "Mama Instant Noddle, Pork favor,150g",
    image: "/category/Instant Foods & Snacks.png",


    price: "11.59",
    oldPrice: "18.88",
    discount: "39%",
    rating: 4.0,
  },
  // Add more items...
];

export default function NewAddProducts(){
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          New Add Products
        </h2>
        <p className="text-gray-400 text-center mb-8 text-sm">
          Do not miss the current offers until the end of the month.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {newAddProductsData.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <Link href={`/shop/${p.id}`}>
                <div className="h-40 flex items-center justify-center bg-white overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={150}
                    height={150}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
                  {p.title}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">Rating ⭐ {p.rating}</p>

                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-green-700 font-bold text-sm mr-2">
                      ${p.price}
                    </span>
                    <span className="text-gray-400 line-through text-xs">
                      ${p.oldPrice}
                    </span>
                    <span className="ml-2 text-xs text-pink-600 font-semibold bg-pink-100 px-1.5 py-0.5 rounded">
                      {p.discount}
                    </span>
                  </div>

                  <button
                    className="text-gray-500 hover:text-green-700 transition"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


