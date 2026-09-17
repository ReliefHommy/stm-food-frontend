// app/components/landing/HowItWorks.tsx
import Link from 'next/link';

const steps = [
  {
    n: '01',
    title: 'เริ่มต้นจากหมวดหมู่ หรือเปิดแผนที่',
    body: 'เริ่มต้นจากหมวดหมู่ หรือเปิดแผนที่เพื่อดูว่ามีอะไรอยู่ใกล้คุณบ้าง',
  },
  {
    n: '02',
    title: 'ใช้ตัวกรองเลือกตามประเทศและเมือง',
    body: 'จำกัดขอบเขตให้เหลือเพียงชื่อประเทศ หรือชื่อเมืองที่ชุมชนได้ขยายไปถึง',
  },
  {
    n: '03',
    title: 'บันทึกและรับการแจ้งเตือน',
    body: 'เก็บรายการที่คุณสนใจไว้ แล้วรับการแจ้งเตือนเตือนความจำก่อนถึงวันหมดอายุของรายการ',
  },
   {
    n: '04',
    title: 'ลงประกาศของคุณเองได้ฟรี',
    body: 'ลงประกาศฟรี เขียนเพียงครั้งเดียวได้ทั้งภาษาไทยและภาษาอังกฤษ',
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 ">
      
              <div className="text-center max-w-xl mx-auto mb-12">
       <h2 className="text-3xl font-bold tracking-tight text-[#d876ac] dark:text-white sm:text-4xl">
        
          <span className="text-[#422646]">How it</span>    WORKs
        </h2>
        <p className="font-body text-[#422646]-soft mt-3" style={{ lineHeight: 1.7 }}>
           ใช้บริการของเราได้ง่าย ๆ เพียงไม่กี่ขั้นตอน
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.n}>
            <span className="font-headline text-3xl font-semibold text-[#d876ac]">{step.n}</span>
            <h3 className="font-headline text-lg font-semibold text-[#422646] mt-3 mb-2">
              {step.title}
            </h3>
            <p className="font-body text-sm text-[#422646]-soft" style={{ lineHeight: 1.7 }}>
              {step.body}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/events"
          className="inline-block font-body text-sm font-medium bg-[#422646] hover:bg-[#422646]-hover text-white px-6 py-3 rounded-full transition-colors"
        >
          สำรวจงานงานวัด & ตลาดนัด
        </Link>
      
      </div>

    </section>
  );
}
