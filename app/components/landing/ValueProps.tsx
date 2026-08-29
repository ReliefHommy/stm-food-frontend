// app/components/landing/ValueProps.tsx
import Image from 'next/image';

const items = [
  {
    image: '/banners/value_image-1.jpg',
    title: 'ร้านค้าจริง ไม่ใช่โกดังสินค้า',
    body: 'สินค้าทุกชิ้นส่งตรงจากร้านค้าไทยที่มีชื่อจริง คุณรู้ว่าใครเป็นคนทำ และติดตามร้านของเขาได้',
  },
  {
    image: '/banners/value_image-2.jpg',
    title: 'กล่องที่คัดสรรโดยคนทำเอง',
    body: 'กล่องสมาชิกแต่ละกล่องถูกเลือกโดยร้านค้าเอง ไม่ใช่ประกอบจากแคตตาล็อกทั่วไป',
  },
  {
    image: '/banners/value_image-3.jpg',
    title: 'ส่งตรงตามตารางของคุณ',
    body: 'รายสัปดาห์ รายสองสัปดาห์ หรือรายเดือน ค่าส่งรวมอยู่ในราคากล่องแล้ว หยุดพักได้ทุกเมื่อ',
  },
];

export default function ValueProps() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(({ image, title, body }) => (
          <div
            key={title}
            className="bg-cream-card border border-hairline rounded-card p-7"
          >
            <div className="relative w-full h-40 rounded-btn overflow-hidden mb-4">
              <Image src={image} alt="" fill className="object-cover" />
            </div>
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
