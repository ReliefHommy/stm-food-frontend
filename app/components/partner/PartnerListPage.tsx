// app/components/partner/PartnerListPage.tsx
import { Bitter, Noto_Sans_Thai, Work_Sans } from "next/font/google";

import LandingNav from "@/app/components/landing/LandingNav";
import LandingFooter from "@/app/components/landing/LandingFooter";
import PartnerCard from "./PartnerCard";
import { getPartnerPosts } from "@/app/lib/partners";

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

export default async function PartnerListPage() {
  let partners: Awaited<ReturnType<typeof getPartnerPosts>> = [];
  let error = false;

  try {
    partners = await getPartnerPosts();
  } catch {
    error = true;
  }

  return (
    <div
      className={`${bitter.variable} ${notoSansThai.variable} ${workSans.variable} font-body bg-cream text-charcoal min-h-screen`}
    >
      <LandingNav />

      <main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-10">
        <header className="mb-6 flex flex-col gap-2 md:mb-10">
          <h1 className="text-2xl font-black tracking-tight text-charcoal md:text-3xl">
            Stores
          </h1>
          <p className="max-w-2xl text-sm text-charcoal-soft">
            พาร์ทเนอร์ร้านค้าไทยที่คุณจะได้พบใน Som Tam Market อ่านเรื่องราวของแต่ละร้าน
            แล้วไปต่อที่ร้านค้าเมื่อพร้อม
          </p>
        </header>

        {error ? (
          <p className="py-16 text-center text-sm text-charcoal-soft">
            ขออภัย ไม่สามารถโหลดข้อมูลพาร์ทเนอร์ได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง
          </p>
        ) : partners.length === 0 ? (
          <p className="py-16 text-center text-sm text-charcoal-soft">
            ยังไม่มีพาร์ทเนอร์ในขณะนี้
          </p>
        ) : (
          <section className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {partners.map((p) => (
              <div key={p.slug} className="mb-4">
                <PartnerCard partner={p} />
              </div>
            ))}
          </section>
        )}
      </main>

      <LandingFooter />
    </div>
  );
}
