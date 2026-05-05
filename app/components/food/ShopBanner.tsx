// app/components/shop/ShopBanner.tsx
import Link from 'next/link';


export default function ShopBanner() {
  return (
    <div className="mb-8 rounded-lg overflow-hidden shadow">
      <Link href="/shop">
        <img
          src="/banners/thaiband.png"
          alt="Shop Banner"
          width={1200}
          height={300}
          className="w-full object-cover"
        />
      </Link>
    </div>
  );
}