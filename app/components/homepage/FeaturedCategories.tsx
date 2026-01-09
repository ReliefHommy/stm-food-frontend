"use client"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const categories = [
  { name: "Fresh Produce", products: 12, image: "/category/fresh-product.jpeg" },
  { name: "Rice & Grains", products: 8, image: "/category/rice-grains.jpeg" },
  { name: "Sauces & Seasonings", products: 15, image: "/category/Sauces & Seasonings.png" },
  { name: "Canned & Preserved", products: 9, image: "/category/Canned-Preserved-Foods.jpg" },
  { name: "Instant Foods", products: 14, image: "/category/Instant Foods & Snacks.png" },
  { name: "Frozen Foods", products: 6, image: "/category/frozen-foods.png" },
  { name: "Beverages", products: 10, image: "/category/beverages.png" },
  { name: "Desserts & Sweets", products: 7, image: "/category/desserts-sweets.png" },
  { name: "Health & Specialty", products: 5, image: "/category/Health & Specialty Products.png" },
]

export default function ShopByCategory() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Shop by Category</h2>

        {/* Slider buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 z-10"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-36 text-center"
            >
              <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden shadow-sm hover:shadow-lg transition">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-3 text-sm font-medium text-gray-700">{cat.name}</h3>
              <p className="text-xs text-gray-500">{cat.products} Products</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 z-10"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </section>
  )
}

