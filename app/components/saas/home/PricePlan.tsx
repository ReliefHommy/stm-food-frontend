// app/components/saas/PricingPlans.tsx
"use client";

import { useMemo, useState } from "react";

type Lang = "EN" | "TH";

type Plan = {
  key: "starter" | "growth" | "pro" | "premium";
  name: string;
  price: string; // e.g. "€28"
  period: string; // e.g. "/month" or "/เดือน"
  bullets: string[];
  cta: string;
  badge?: string; // e.g. "MOST POPULAR"
  highlighted?: boolean; // Growth card
};

type PricingCopy = {
  kicker: string;
  title: string;
  subtitle: string;
  plans: Plan[];
};

export default function PricingPlans() {
  const [lang, setLang] = useState<Lang>("EN");

  const content = useMemo<Record<Lang, PricingCopy>>(
    () => ({
      EN: {
        kicker: "PRICING & PLANS",
        title: "Flexible plans for every growth stage",
        subtitle:
          "Choose the package that matches your team size and growth goals.Cancel anytime — no long-term contract..",
   
          
        plans: [
          {
            key: "starter",
            name: "Starter",
            price: "€0",
            period: "/month",
            bullets: [
              "Public vendor profile (basic)",
              "1 location with basic info",
              "10 products/menu items",
              "1 campaign post / month (manual)",
              "Community support",
              "Basic analytics: profile views + link clicks",
              "“STM Partner” badge (non-verified)",
            ],
            cta: "Start Free",
          },
          {
            key: "growth",
            name: "Growth",
            price: "€19",
            period: "/month",
            badge: "MOST POPULAR",
            highlighted: true,
            bullets: [
              "Everything in Starter",
              "Unlimited products/menu items",
              "4 campaign posts / month (can use templates)",
              "10 template downloads / month",
              "Basic AI tools: captions + post ideas + translations",
            ],
            cta: "Choose Growth",
          },
          {
            key: "pro",
            name: "Pro Studio",
            price: "€59",
            period: "/month",
            bullets: [
              "Everything in Growth",
              "20 campaign posts / month",
              "AI “promo builder” (post + vedio + image prompt set)",
              "Promotion tools (Weekly deal, Pre-order, Food Gife boxs, Christmas/NY)",
              "Team member roles and permissions",
              "Monthly optimization recommendations",
            ],
            cta: "Choose Pro Studio",
          },
          {
            key: "premium",
            name: "Premium Partner",
            price: "€99",
            period: "/month",
            bullets: [
              "Everything in Pro Studio",
              "Featured placement in STM discovery (city/category)",
              "Dedicated account manager",
              "Custom onboarding support",
              "Partner-level visibility options",
              "Quarterly strategy reviews",
            ],
            cta: "Contact Sales",
          },
        ],
      },
      TH: {
        kicker: "ราคา & แพ็กเกจ",
        title: "แพ็กเกจยืดหยุ่นสำหรับทุกช่วงการเติบโต",
        subtitle:
          "เลือกแพ็กเกจให้เหมาะกับทีมและเป้าหมายของคุณ ยกเลิกได้ตลอดเวลา — ไม่มีสัญญาระยะยาว",
        plans: [
          {
            key: "starter",
            name: "Starter",
            price: "€0",
            period: "/เดือน",
            bullets: [
              "โปรไฟล์ร้านแบบสาธารณะ",
              "ข้อมูลร้านและเมนูพื้นฐาน",
              "โพสต์แคมเปญ 1 ครั้ง/เดือน",
              "ซัพพอร์ตจากคอมมูนิตี้",
              "ใช้งานบนมือถือได้ดี",
            ],
             cta: "เริ่มต้นใช้ฟรีหนึ่งเดือน",
          },
          {
            key: "growth",
            name: "Growth",
            price: "€19",
            period: "/เดือน",
            badge: "ยอดนิยม",
            highlighted: true,
            bullets: [
              "รวมทุกอย่างใน Starter",
              "โพสต์แคมเปญได้ไม่จำกัด",
              "เข้าถึงตลาดเทมเพลต",
              "เครื่องมือทำคอนเทนต์หลายภาษา",
              "แดชบอร์ดสถิติพื้นฐาน",
              "ซัพพอร์ตทางอีเมลแบบเร่งด่วน",
            ],
            cta: "เลือก Growth",
          },
          {
            key: "pro",
            name: "Pro Studio",
            price: "€59",
            period: "/เดือน",
            bullets: [
              "รวมทุกอย่างใน Growth",
              "แดชบอร์ดผู้ขายขั้นสูง",
              "เครื่องมือทำโปรโมชันแบบอัตโนมัติ",
              "วิเคราะห์ผลแคมเปญแบบละเอียด",
              "บทบาทและสิทธิ์สมาชิกทีม",
              "คำแนะนำการปรับปรุงรายเดือน",
            ],
            cta: "เลือก Pro Studio",
          },
          {
            key: "premium",
            name: "Premium Partner",
            price: "€99",
            period: "/เดือน",
            bullets: [
              "รวมทุกอย่างใน Pro Studio",
              "จัดการหลายสาขา",
              "ผู้ดูแลบัญชีเฉพาะ",
              "ซัพพอร์ตการเริ่มต้นแบบปรับตามร้าน",
              "ตัวเลือกการมองเห็นระดับพาร์ทเนอร์",
              "รีวิวกลยุทธ์รายไตรมาส",
            ],
            cta: "ติดต่อฝ่ายขาย",
          },
        ],
      },
    }),
    []
  );

  const copy = content[lang];

  return (
    <section id="pricing" className="w-full scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Header + language switch */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold tracking-widest text-indigo-700">
              {copy.kicker}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              {copy.subtitle}
            </p>
          </div>

          {/* Tabs */}
          <div className="inline-flex w-fit rounded-xl border border-slate-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setLang("EN")}
              className={[
                "rounded-full px-3 py-1.5 text-sm font-semibold transition",
                lang === "EN"
                  ? "bg-indigo-700 text-white"
                  : "text-slate-700 hover:bg-slate-200",
              ].join(" ")}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang("TH")}
              className={[
                "rounded-full px-3 py-1.5 text-sm font-semibold transition",
                lang === "TH"
                  ? "bg-indigo-700 text-white"
                  : "text-slate-700 hover:bg-slate-200",
              ].join(" ")}
            >
              ไทย
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {copy.plans.map((plan) => (
            <PlanCard key={`${lang}-${plan.key}`} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const isHot = !!plan.highlighted;

  return (
    <div
      className={[
        "relative rounded-2xl border shadow-sm",
        isHot
          ? "border-slate-900 bg-indigo-900 text-white-900"
          : "border-slate-200 bg-white text-slate-900",
      ].join(" ")}
    >
      {plan.badge ? (
        <div className="absolute -top-3 left-6">
          <span className="inline-flex items-center rounded-full bg-indigo-400 px-3 py-1 text-xs font-extrabold tracking-wide text-white">
            {plan.badge}
          </span>
        </div>
      ) : null}

      <div className="p-6">
        <h3 className={["text-lg font-extrabold", isHot ? "text-white" : ""].join(" ")}>
          {plan.name}
        </h3>

        <div className="mt-3 flex items-end gap-2">
          <span className={["text-4xl font-extrabold", isHot ? "text-white" : ""].join(" ")}>
            {plan.price}
          </span>
          <span className={["pb-1 text-sm", isHot ? "text-slate-200" : "text-slate-500"].join(" ")}>
            {plan.period}
          </span>
        </div>

        <ul className={["mt-5 space-y-2 text-sm", isHot ? "text-slate-200" : "text-slate-700"].join(" ")}>
          {plan.bullets.map((b, idx) => (
            <li key={`${plan.key}-b-${idx}`} className="flex gap-2">
              <span
                className={[
                  "mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full",
                  isHot ? "bg-white/90" : "bg-slate-900",
                ].join(" ")}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            type="button"
            className={[
              "w-full rounded-full px-4 py-3 text-sm font-extrabold transition",
              isHot
                ? "bg-white text-slate-900 hover:bg-slate-100"
                : "bg-indigo-900 text-white hover:bg-slate-800",
            ].join(" ")}
            onClick={() => {
              // TODO: wire to checkout/signup/contact flow
              // For now: no-op
            }}
          >
            {plan.cta}
          </button>
        </div>
      </div>
    </div>
  );
}