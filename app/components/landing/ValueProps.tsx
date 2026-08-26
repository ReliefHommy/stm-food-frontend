// app/components/landing/ValueProps.tsx
import { StorefrontIcon, CuratedBoxIcon, ScheduleIcon } from './icons';

const items = [
  {
    icon: StorefrontIcon,
    title: 'ร้านค้าจริง ไม่ใช่โกดังสินค้า',
    body: 'สินค้าทุกชิ้นส่งตรงจากร้านค้าไทยที่มีชื่อจริง คุณรู้ว่าใครเป็นคนทำ และติดตามร้านของเขาได้',
  },
  {
    icon: CuratedBoxIcon,
    title: 'กล่องที่คัดสรรโดยคนทำเอง',
    body: 'กล่องสมาชิกแต่ละกล่องถูกเลือกโดยร้านค้าเอง ไม่ใช่ประกอบจากแคตตาล็อกทั่วไป',
  },
  {
    icon: ScheduleIcon,
    title: 'ส่งตรงตามตารางของคุณ',
    body: 'รายสัปดาห์ รายสองสัปดาห์ หรือรายเดือน ค่าส่งรวมอยู่ในราคากล่องแล้ว หยุดพักได้ทุกเมื่อ',
  },
];

export default function ValueProps() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="bg-cream-card border border-hairline rounded-card p-7"
          >
            <Icon className="w-8 h-8 text-terracotta mb-4" />
            <h3 className="font-headline text-lg font-semibold text-charcoal mb-2">
              {title}
            </h3>
            <p className="font-body text-sm text-charcoal-soft" style={{ lineHeight: 1.7 }}>
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
