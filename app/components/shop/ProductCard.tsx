"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/app/context/CartContext"; // adjust path if needed

export default function ProductCard() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.somtammarket.com/api/food/products/")
      .then((res) => res.json())
      .then((data) => {
        const productsArray = Array.isArray(data)
          ? data
          : Array.isArray(data.results)
          ? data.results
          : [];
        setProducts(productsArray);
      })
      .catch((err) => console.error("Fetch failed:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
      {products.map((product: any) => (
        <div
          key={product.id}
          className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          {/* Product Image */}
          <Link href={`/shop/${product.slug}`}>
            <div className="h-48 flex items-center justify-center bg-white overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Product Details */}
          <div className="p-3">
            <Link href={`/shop/${product.slug}`}>
              <p className="text-sm font-normal text-black leading-snug hover:text-green-700 transition">
                {product.title}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                The-Card | Unit | 440 g.
              </p>
            </Link>

            {/* Price + Add to Cart */}
            <div className="mt-2 flex items-center justify-between">
              <p className="text-green-700 font-bold text-sm">
                {product.price} kr
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent navigation
                  addToCart({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  });
                }}
                className="text-gray-500 hover:text-green-700 transition"
                aria-label="Add to cart"
              >
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
