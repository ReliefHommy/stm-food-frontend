// app/components/shop/ShopDesserts.tsx
import Image from 'next/image';

// TODO(nok): swap the shared placeholder photo for real product photos, and [ราคา] for real prices, before shipping.
const desserts = [
  { label: 'ข้าวเหนียวมะม่วง' },
  { label: 'ทับทิมกรอบ' },
  { label: 'บัวลอย' },
];

export default function ShopDesserts() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <h2 className="font-headline text-3xl md:text-4xl font-semibold text-charcoal text-center mb-10">
        ขนมหวานไทย
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {desserts.map((dessert) => (
          <div key={dessert.label} className="flex flex-col items-center text-center">
            <div className="relative w-full aspect-[4/3] rounded-card overflow-hidden">
              <Image
                src="/category/desserts-sweets.png"
                alt={dessert.label}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-body text-base md:text-lg text-charcoal mt-5">
              {dessert.label} — [ราคา] kr
            </p>
            <button
              type="button"
              className="font-body text-sm font-medium bg-terracotta hover:bg-terracotta-hover text-white px-7 py-3 rounded-full mt-4 transition-colors"
            >
              ซื้อเลย
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
