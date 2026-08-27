// app/components/shop/ShopHero.tsx
import Image from 'next/image';

export default function ShopHero() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
      <div className="relative h-[360px] md:h-[480px] rounded-[32px] md:rounded-[48px] overflow-hidden">
        <Image
          src="/shop/hero-market.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-headline text-4xl md:text-6xl font-semibold text-white">
            ยินดีต้อนรับ!
          </h1>
          <p className="font-body text-base md:text-xl text-white/90 mt-4 max-w-2xl" style={{ lineHeight: 1.7 }}>
            ของกินไทยแท้ ครบทุกหมวดในที่เดียว ตั้งแต่เครื่องแกงไปจนถึงของหวาน
          </p>
        </div>
      </div>
    </section>
  );
}
