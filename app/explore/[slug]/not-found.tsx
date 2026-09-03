// app/explore/[slug]/not-found.tsx
import { Bitter, Noto_Sans_Thai, Work_Sans } from 'next/font/google';
import Link from 'next/link';
import LandingNav from '@/app/components/landing/LandingNav';
import LandingFooter from '@/app/components/landing/LandingFooter';

// Same per-page font loading pattern as app/explore/page.tsx — not-found.tsx
// is rendered outside ExploreDetailPage's own tree, so it needs its own
// font variables rather than inheriting them.
const bitter = Bitter({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-bitter',
  display: 'swap',
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-thai',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-work-sans',
  display: 'swap',
});

export default function NotFound() {
  return (
    <div
      className={`${bitter.variable} ${notoSansThai.variable} ${workSans.variable} font-body bg-cream text-charcoal min-h-screen`}
    >
      <LandingNav />
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="font-headline text-3xl text-charcoal">
          ไม่พบเรื่องราวนี้
        </h1>
        <p className="mt-4 font-body text-charcoal-soft">
          เรื่องราวที่คุณกำลังมองหาอาจถูกย้ายหรือลบไปแล้ว
        </p>
        <Link
          href="/explore"
          className="mt-8 inline-block rounded-btn bg-terracotta px-6 py-3 font-body text-white transition-colors hover:bg-terracotta-hover"
        >
          กลับไปหน้าสำรวจ
        </Link>
      </div>
      <LandingFooter />
    </div>
  );
}
