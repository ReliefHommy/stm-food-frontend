'use client';

import { useMemo, useState } from 'react';

type LanguageKey = 'en' | 'th';

const aboutContent: Record<
  LanguageKey,
  {
    title: string;
    paragraphs: string[];
    starter: string[];
    growth: string[];
    proStudio: string[];
    premiumPartner: string[];
  }
> = {
  en: {
    title: 'About STM Food SaaS',
    paragraphs: [
      'STM Food SaaS: STM Food SaaS is the ultimate digital ecosystem designed to bridge the gap between authentic Thai food vendors and their customers in the EU. We transform the "chaos" of social media selling into a professional, high-growth business model.',
      'Our platform provides: a Subscription Studio Marketplace that empowers vendors—from small home kitchens to established restaurants—with the professional tools they need to succeed. Every partner on our platform receives a Public Vendor Profile optimized for Google discovery (SEO).featuring beautiful galleries, clear menus, and direct "Order/Book" buttons to ensure customers never have to guess about size, weight, or price again.',
    ],
    starter: [
      'A frictionless way to enter the ecosystem with a basic public profile and essential analytics.',
      'Help Thai food vendors operate digitally with less friction. Make growth tools accessible to small and medium teams',
    ],
    growth: [
      'For active sellers ready to scale with unlimited product listings and AI-powered caption and translation tools.',
      'Standardize vendor quality and customer experience across markets.',
    ],
    proStudio: [
      'A true "marketing machine" offering seasonal campaign packs (like Songkran or Christmas) and multi-language publishing in Thai, English, Swedish, and Norwegian',
   
    ],
    premiumPartner: [
      'For top-tier vendors seeking featured placement, priority support, and monthly strategy packs.',
   
    ],
  },
  th: {
    title: 'เกี่ยวกับ STM Food SaaS',
    paragraphs: [
      'STM Food SaaS: คือระบบ Ego-Systemที่ออกแบบมาเพื่อเชื่อมต่อร้านอาหารและร้านขายของชำไทยในยุโรปเข้ากับลูกค้าโดยเฉพาะ เราเปลี่ยน "ความวุ่นวาย" ของการขายผ่านโซเชียลมีเดียให้กลายเป็นโมเดลธุรกิจที่เป็นมืออาชีพและเติบโตได้อย่างยั่งยืน',
      'แพลตฟอร์มของเรามาในรูปแบบ Subscription Studio Marketplace:ที่ช่วยสนับสนุนผู้ขาย ตั้งแต่ร้านอาหารตามสั่งขนาดเล็กไปจนถึงร้านค้าส่งรายใหญ่ ด้วยเครื่องมือระดับมืออาชีพ พาร์ทเนอร์ทุกรายจะได้รับ หน้าโปรไฟล์ร้านค้าสาธารณะ (Public Vendor Profile) ที่ถูกปรับแต่งให้ค้นหาเจอง่ายบน Google (SEO) พร้อมระบบแกลเลอรี เมนูอาหารที่ชัดเจน และปุ่ม "สั่งซื้อ/จอง/ติดต่อ" เพื่อให้ลูกค้าไม่ต้องสับสนเรื่อง รายละเอียดของสินค้า เช่น ขนาด น้ำหนัก หรือราคาอีกต่อไป',
    ],
    starter: [
      'วิธีการที่ไร้รอยต่อในการเข้าร่วมระบบนิเวศด้วยโปรไฟล์สาธารณะพื้นฐานและการวิเคราะห์ข้อมูลที่จำเป็น',
      'เริ่มต้นสร้างตัวตนบนโลกออนไลน์ได้ฟรี พร้อมระบบวิเคราะห์ข้อมูลพื้นฐาน เพื่อให้คุณเข้าร่วมระบบนิเวศของเราได้อย่างรวดเร็ว',
    ],
growth: [
      'สำหรับผู้ขายที่ต้องการขยายตลาด สามารถลงสินค้าได้ไม่จำกัด',
      'พร้อมเครื่องมือ AI ช่วยคิดคำบรรยายภาพ (Captions) และระบบแปลภาษาอัตโนมัติ',
    ],
    proStudio: [
      '"เพิ่มเครื่องมือทำการตลาด" ที่ช่วยคุณทำโปรโมชั่น (เช่น สินค้าจัดรายการ หรือ Pre-Order และระบบจองสินค้าล่วงหน้า) ',
      'เหมาะสำหรับผู้ประกอบการที่นำเข้าสินค้าจากเมืองไทย ส่งถึงมือลูกค้าในยุโรปทันที',
     
    ],
   premiumPartner: [
     'สำหรับผู้ประกอบการนำเข้า และกระจายสินค้าไปที่ผู้รับช่วงไปจำหน่ายต่อในยุโรป',
      'สำหรับร้านค้าชั้นนำที่ต้องการตำแหน่งโดดเด่นในการค้นหา (Featured placement) การสนับสนุนลำดับต้น และแผนกลยุทธ์การตลาดรายเดือน',
     
     
    ],
  },
};

export default function AboutSection() {
  const [activeLang, setActiveLang] = useState<LanguageKey>('en');

  const about = useMemo(() => {
    return {
      title: aboutContent[activeLang].title,
      paragraphs: aboutContent[activeLang].paragraphs,
    };
  }, [activeLang]);

  const sideContent = aboutContent[activeLang];

  return (
    <section id="about" className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
              About
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {about.title}
            </h2>
          </div>

          <div className="inline-flex rounded-full border border-gray-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setActiveLang('en')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeLang === 'en'
                  ? 'bg-indigo-700 text-white'
                  : 'text-gray-700 hover:bg-indigo-200'
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setActiveLang('th')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeLang === 'th'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
             ไทย
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6">
            {about.paragraphs.map((paragraph, index) => (
              <p key={`${activeLang}-${index}`} className="text-sm leading-7 text-gray-700 sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900">Starter</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                {sideContent.starter.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900">Growth</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                {sideContent.growth.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">Pro Studio</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                {sideContent.proStudio.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900">Premium Partner</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                {sideContent.premiumPartner.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
