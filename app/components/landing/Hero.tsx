// app/components/landing/Hero.tsx
import Link from 'next/link';
import { HeroIllustration } from './icons';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-14 pb-16 md:pt-20 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="inline-block font-body text-xs font-medium tracking-wide bg-gold/20 text-charcoal border border-gold/40 rounded-full px-3.5 py-1.5">
          ของไทยแท้ จากร้านค้าที่มีตัวตนจริง
        </span>

        <h1 className="font-headline text-4xl md:text-5xl font-semibold leading-tight text-charcoal mt-5">
          Real Thai flavors, delivered on your schedule.
        </h1>

        <p className="font-body text-base md:text-lg text-charcoal-soft mt-5" style={{ lineHeight: 1.7 }}>
          เลือกซื้อวัตถุดิบและของแห้งไทยแท้จากร้านค้าไทยรายย่อย
          หรือสมัครสมาชิกกล่องที่ร้านค้านั้นคัดสรรให้เองทุกสัปดาห์ ทุกสองสัปดาห์ หรือทุกเดือน
          ไม่ใช่คลังสินค้าไร้ตัวตน ไม่ใช่แคตตาล็อกทั่วไป
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Link
            href="/shop"
            className="font-body text-sm font-medium bg-terracotta hover:bg-terracotta-hover text-white px-6 py-3 rounded-btn text-center transition-colors"
          >
            ช้อปในตลาด
          </Link>
          <Link
            href="/shop"
            className="font-body text-sm font-medium bg-transparent border-[1.5px] border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-6 py-3 rounded-btn text-center transition-colors"
          >
            เริ่มสมัครกล่อง
          </Link>
        </div>

        <p className="font-body text-sm text-charcoal-soft mt-5">
          หยุดพักหรือยกเลิกกล่องของคุณได้ทุกเมื่อ
        </p>
      </div>

      <div className="w-full max-w-md mx-auto lg:max-w-none">
        <HeroIllustration className="w-full h-auto" />
      </div>
    </section>
  );
}
