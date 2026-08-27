// app/components/shop/ShopComboPromo.tsx
import Image from 'next/image';

export default function ShopComboPromo() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8">
      <div className="bg-charcoal rounded-[32px] md:rounded-[48px] overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="relative h-64 md:h-full min-h-[280px]">
          <Image
            src="/shop/combo-somtam-kit.png"
            alt="ชุดส้มตำไทย พร้อมปรุง"
            fill
            className="object-cover"
          />
        </div>

        <div className="px-8 py-10 md:px-12 md:py-16 text-center md:text-left">
          <h2 className="font-headline text-3xl md:text-5xl font-semibold text-white">
            ชุดส้มตำไทย
            <br />
            (พร้อมปรุง)
          </h2>
          {/* TODO(nok): replace [ราคา] with the real combo price before shipping */}
          <p className="font-body text-base md:text-lg text-white/85 mt-5" style={{ lineHeight: 1.7 }}>
            มะละกอ มะเขือเทศ ถั่วฝักยาว และพริก ครบชุดในราคาเดียว [ราคา] kr
          </p>
          <button
            type="button"
            className="font-body text-base font-medium bg-terracotta hover:bg-terracotta-hover text-white px-8 py-3.5 rounded-full mt-7 transition-colors"
          >
            ซื้อเลย
          </button>
        </div>
      </div>
    </section>
  );
}
