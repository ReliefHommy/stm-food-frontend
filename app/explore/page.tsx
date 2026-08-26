// app/explore/page.tsx
import { Bitter, Noto_Sans_Thai, Work_Sans } from 'next/font/google';

import LandingNav from '../components/landing/LandingNav';
import LandingFooter from '../components/landing/LandingFooter';
import ExploreHero from '../components/explore/ExploreHero';
import ExploreGrid from '../components/explore/ExploreGrid';

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

export default function ExplorePage() {
  return (
    <div
      className={`${bitter.variable} ${notoSansThai.variable} ${workSans.variable} font-body bg-cream text-charcoal min-h-screen`}
    >
      <LandingNav />
      <ExploreHero />
      <main className="max-w-6xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <ExploreGrid />
      </main>
      <LandingFooter />
    </div>
  );
}
