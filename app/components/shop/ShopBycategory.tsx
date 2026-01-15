//app/components/homepage/ShopBycategory.tsx
"use client"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import { apiFetch } from "../../../lib/api"

type Category = {
  id?: number | string
  name: string
  image?: string
  products?: number
}


export default function ShopByCategory() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const fetchCategories = async () => {
      try {
        setLoading(true)
        setError(null)
        const data: any = await apiFetch('https://stm-food-backend-production.up.railway.app/api/food/categories/')
        const items = Array.isArray(data) ? data : data?.results ?? []

        const mapped = items.map((it: any) => ({
          id: it.id ?? it.pk ?? it.slug,
          name: it.name ?? it.title ?? it.category_name ?? 'Unknown',
          image: it.image ?? it.thumbnail ?? '/category/fresh-product.jpeg',
          products: it.products_count ?? it.product_count ?? it.products ?? 0,
        }))

        if (mounted) setCategories(mapped)
      } catch (err: any) {
        console.error('Failed to load categories', err)
        if (mounted) setError(err?.message ?? 'Failed to load categories')
      } finally {
        if (mounted) setLoading(false)
      }
    }

    fetchCategories()
    return () => { mounted = false }
  }, [])

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

        {loading ? (
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-36 text-center">
                <div className="w-36 h-36 mx-auto rounded-full bg-gray-100 animate-pulse" />
                <div className="h-3 bg-gray-200 rounded mt-3 mx-auto w-24 animate-pulse" />
                <div className="h-2 bg-gray-200 rounded mt-2 mx-auto w-16 animate-pulse" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-sm text-red-600">{error}</div>
        ) : (
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide">
            {categories.map((cat, index) => (
              <div key={cat.id ?? index} className="flex-shrink-0 w-36 text-center">
                <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden shadow-sm hover:shadow-lg transition">
                  <Image
                    src={cat.image ?? '/category/fresh-product.jpeg'}
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
        )}

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