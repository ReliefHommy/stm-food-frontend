// app/components/landing/HowItWorks.tsx
import Link from 'next/link';

const steps = [
  {
    n: '01',
    title: 'เลือกกล่องจากร้านค้า',
    body: 'แต่ละกล่องคัดสรรโดยร้านค้าเจ้าเดียว ไม่ใช่สินค้าผสมจากโกดัง',
  },
  {
    n: '02',
    title: 'เลือกความถี่ในการส่ง',
    body: 'รายสัปดาห์ รายสองสัปดาห์ หรือรายเดือน เปลี่ยนได้ทุกเมื่อตามที่ครัวของคุณต้องการ',
  },
  {
    n: '03',
    title: 'เราจัดส่ง คุณแค่เพลิดเพลิน',
    body: 'หยุดพักก่อนรอบที่ไม่ต้องการ หรือยกเลิกได้ทุกเมื่อ ไม่ต้องโทรติดต่อ',
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-charcoal">
          How subscribing works
        </h2>
        <p className="font-body text-charcoal-soft mt-3" style={{ lineHeight: 1.7 }}>
          แค่สามขั้นตอน และค่าส่งรวมอยู่ในราคาเสมอ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.n}>
            <span className="font-headline text-3xl font-semibold text-gold">{step.n}</span>
            <h3 className="font-headline text-lg font-semibold text-charcoal mt-3 mb-2">
              {step.title}
            </h3>
            <p className="font-body text-sm text-charcoal-soft" style={{ lineHeight: 1.7 }}>
              {step.body}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/shop"
          className="inline-block font-body text-sm font-medium bg-terracotta hover:bg-terracotta-hover text-white px-6 py-3 rounded-btn transition-colors"
        >
          เริ่มกล่องของคุณ
        </Link>
      </div>
    </section>
  );
}
