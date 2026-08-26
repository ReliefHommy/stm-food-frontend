// app/components/landing/Differentiator.tsx
import { CheckIcon, XIcon } from './icons';

const genericBullets = [
  'กล่องประกอบจากโกดัง แคตตาล็อกเดียวกับที่อื่นทั่วไป',
  'ไม่รู้เลยว่าใครเป็นคนทำหรือปลูกสิ่งที่คุณกำลังกินอยู่',
  'ค่าส่งบวกเพิ่มตอนเช็คเอาต์',
];

const stmBullets = [
  'กล่องคัดสรรโดยร้านค้าที่มีชื่ออยู่บนกล่องจริงๆ',
  'สินค้าทุกชิ้นย้อนกลับไปหาร้านค้าไทยจริงที่คุณติดตามได้',
  'ค่าส่งรวมอยู่ในราคาแล้ว',
];

export default function Differentiator() {
  return (
    <section className="bg-charcoal py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-cream text-center max-w-2xl mx-auto">
          Not another generic grocery subscription.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="border border-white/15 rounded-card p-7">
            <h3 className="font-body text-sm font-semibold tracking-wide text-white/60 mb-5">
              แอปร้านของชำทั่วไป
            </h3>
            <ul className="space-y-4">
              {genericBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <XIcon className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-white/70" style={{ lineHeight: 1.7 }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-gold/40 rounded-card p-7 bg-white/5">
            <h3 className="font-body text-sm font-semibold tracking-wide text-gold mb-5">
              SOM TAM MARKET
            </h3>
            <ul className="space-y-4">
              {stmBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-cream" style={{ lineHeight: 1.7 }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
