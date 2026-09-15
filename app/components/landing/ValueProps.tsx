// app/components/landing/ValueProps.tsx
import Image from 'next/image';
import { Church, CookingPot, ShoppingBasket, StoreIcon, Leaf,BoxIcon } from "lucide-react"

const items = [
  {
    icon: <Church className="h-8 w-8 text-[#d876ac]" />,
    title: 'Temple & Market',
    body: 'วันพระ งานวัด & ตลาดนัด รวมร้านค้าท้องถิ่นที่คัดสรรมาอย่างดี',
  },
  {
    icon: <CookingPot className="h-8 w-8 text-[#d876ac]" />,
    title: 'Buy & Sell',
   body: 'ซื้อขายสินค้า & อุปกรณ์ร้านอาหารมือสองได้ง่าย ๆ ในที่เดียว',
  },
  {
      icon: <ShoppingBasket className="h-8 w-8 text-[#d876ac]" />,
    title: 'Group Order',
    body: 'รวมกลุ่มสั่งซื้อสินค้าจากเมืองไทยกับสมาชิกอื่นๆ เพื่อประหยัดค่าจัดส่ง',
  },
    {
      icon: <StoreIcon className="h-8 w-8 text-[#d876ac]" />,
    title: 'Business',
    body: 'ซื้อ-ขาย-ให้เข่า กิจการร้านอาหาร & อุปกรณ์ร้านอาหารมือสองได้ง่าย ๆ ในที่เดียว',
  },
    {
      icon: <Leaf className="h-8 w-8 text-[#d876ac]" />,
    title: 'Farmer & Grower',
    body: 'สวนครัวไทยในยุโรป, ติดตามผลผลิตจากเกษตรกรไทยและคนปลูกผักในยุโรป',
  },
    {
      icon: <BoxIcon className="h-8 w-8 text-[#d876ac]" />,
    title: 'Subscription',
    body: 'ซื้อสินค้า Subscription จากร้านอาหารไทยในยุโรป',
  },
];

export default function ValueProps() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
            <div className="text-center max-w-xl mx-auto mb-12">
       <h2 className="text-3xl font-bold tracking-tight text-[#d876ac] dark:text-white sm:text-4xl">
          <span className="text-[#422646]">What&apos;s on</span> SOMTAM
        </h2>
      
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(({ icon, title, body }) => (
          <div
            key={title}
            className="bg-cream-card border border-hairline rounded-card p-7"
          >
            <div className="mb-4">{icon}</div>
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
