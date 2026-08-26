// app/components/explore/ExploreHero.tsx
export default function ExploreHero() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-14 pb-10 md:pt-20 md:pb-14 text-center">
      <span className="inline-block font-body text-xs font-medium tracking-wide bg-gold/20 text-charcoal border border-gold/40 rounded-full px-3.5 py-1.5">
        DISCOVER SOM TAM MARKET
      </span>

      <h1 className="font-headline text-4xl md:text-5xl font-semibold leading-tight text-charcoal mt-5">
        Explore the market
      </h1>

      <p
        className="font-body text-base md:text-lg text-charcoal-soft mt-5 max-w-2xl mx-auto"
        style={{ lineHeight: 1.7 }}
      >
        แรงบันดาลใจ สูตรอาหาร และเรื่องราวจากผู้ขายของเรา อัปเดตใหม่ทุกสัปดาห์ —
        ไม่มีตะกร้าสินค้า แค่เพลิดเพลินกับเรื่องราวรสชาติไทย
      </p>
    </section>
  );
}
