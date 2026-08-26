// app/page.tsx
import { Bitter, Noto_Sans_Thai, Work_Sans } from 'next/font/google';

import LandingNav from './components/landing/LandingNav';
import Hero from './components/landing/Hero';
import ValueProps from './components/landing/ValueProps';
import HowItWorks from './components/landing/HowItWorks';
import Differentiator from './components/landing/Differentiator';
import LandingFooter from './components/landing/LandingFooter';

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

export default function LandingPage() {
  return (
    <div
      className={`${bitter.variable} ${notoSansThai.variable} ${workSans.variable} font-body bg-cream text-charcoal`}
    >
      <LandingNav />
      <Hero />
      <ValueProps />
      <HowItWorks />
      <Differentiator />
      <LandingFooter />
    </div>
  );
}
