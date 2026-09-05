// app/components/partner/PartnerDetailPage.tsx
import { Bitter, Noto_Sans_Thai, Work_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import LandingNav from "@/app/components/landing/LandingNav";
import LandingFooter from "@/app/components/landing/LandingFooter";
import type { PartnerPost } from "@/app/lib/partners";

// Same per-page font loading pattern as app/explore/page.tsx (this repo scopes
// these fonts per-page rather than in the shared root layout).
const bitter = Bitter({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-bitter",
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-thai",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-hairline bg-cream-card px-2.5 py-1 text-xs font-semibold text-charcoal-soft">
      {children}
    </span>
  );
}

function SectionTitle({ label }: { label: string }) {
  return (
    <h2 className="text-xs font-extrabold uppercase tracking-wider text-charcoal-soft">
      {label}
    </h2>
  );
}

function formatDate(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    calendar: "gregory",
  }).format(d);
}

export default function PartnerDetailPage({ partner }: { partner: PartnerPost }) {
  const paragraphs = (partner.content ?? "")
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  const dateLabel = formatDate(partner.created_at);

  return (
    <div
      className={`${bitter.variable} ${notoSansThai.variable} ${workSans.variable} font-body bg-cream text-charcoal min-h-screen`}
    >
      <LandingNav />

      <main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-10">
        {/* Header */}
        <header className="mb-6 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <Pill>เรื่องราวพาร์ทเนอร์</Pill>
            </div>

            <h1 className="text-2xl font-black tracking-tight text-charcoal md:text-3xl">
              {partner.title}
            </h1>
            {partner.author?.name ? (
              <p className="mt-1 text-sm font-semibold text-charcoal-soft md:text-base">
                โดย {partner.author.name}
              </p>
            ) : null}
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            {partner.author?.website ? (
              <a
                href={partner.author.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-btn bg-terracotta px-4 py-2.5 text-sm font-extrabold text-white shadow-sm hover:bg-terracotta-hover"
              >
                เยี่ยมชมเว็บไซต์ →
              </a>
            ) : null}
            <Link
              href="/partners"
              className="inline-flex items-center justify-center rounded-btn border border-hairline bg-cream-card px-4 py-2.5 text-sm font-extrabold text-charcoal-soft hover:bg-cream"
            >
              ดูพาร์ทเนอร์ทั้งหมด
            </Link>
          </div>
        </header>

        {partner.featured_image ? (
          <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-card border border-hairline bg-cream-card md:mb-10">
            <Image
              src={partner.featured_image}
              alt={partner.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        ) : null}

        {/* Body grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Left / Main */}
          <section className="space-y-6 md:col-span-8">
            <div className="rounded-card border border-hairline bg-cream-card p-5">
              <SectionTitle label="เรื่องราว" />
              <div className="mt-3 space-y-3">
                {paragraphs.map((p, idx) => (
                  <p key={idx} className="whitespace-pre-line text-sm leading-relaxed text-charcoal-soft">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Right / Sidebar */}
          <aside className="space-y-6 md:col-span-4">
            {partner.author ? (
              <div className="rounded-card border border-hairline bg-cream p-4">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-charcoal-soft">
                  พาร์ทเนอร์
                </h4>

                <div className="mb-3 flex items-center gap-3">
                  {partner.author.logo ? (
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-hairline/40">
                      <Image src={partner.author.logo} alt={partner.author.name} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="h-10 w-10 shrink-0 rounded-full bg-hairline/40" />
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-extrabold text-charcoal">{partner.author.name}</p>
                  </div>
                </div>

                {partner.author.description ? (
                  <p className="mb-3 text-xs italic text-charcoal-soft">
                    “{partner.author.description}”
                  </p>
                ) : null}

                {partner.author.website ? (
                  <a
                    href={partner.author.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-extrabold text-terracotta hover:underline"
                  >
                    เยี่ยมชมเว็บไซต์ →
                  </a>
                ) : null}
              </div>
            ) : null}

            {/* Quick info */}
            {dateLabel ? (
              <div className="rounded-card border border-hairline bg-cream-card p-4">
                <SectionTitle label="ข้อมูล" />
                <div className="mt-3 flex items-start justify-between gap-3">
                  <p className="text-xs font-bold text-charcoal-soft">เผยแพร่เมื่อ</p>
                  <p className="text-right text-xs font-extrabold text-charcoal">{dateLabel}</p>
                </div>
              </div>
            ) : null}

            {/* Navigate */}
            <div className="rounded-card border border-hairline bg-cream-card p-4">
              <SectionTitle label="ไปที่อื่นต่อ" />
              <div className="mt-3 flex flex-col gap-2">
                <Link href="/partners" className="text-xs font-extrabold text-terracotta hover:underline">
                  ← กลับไปหน้าพาร์ทเนอร์
                </Link>
                <Link href="/explore" className="text-xs font-extrabold text-terracotta hover:underline">
                  สำรวจเรื่องราว →
                </Link>
                <Link href="/shop" className="text-xs font-extrabold text-terracotta hover:underline">
                  ไปที่ร้านค้า →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
