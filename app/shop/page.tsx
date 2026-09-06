// app/shop/page.tsx
import { Bitter, Noto_Sans_Thai, Work_Sans } from 'next/font/google';

import LandingNav from '../components/landing/LandingNav';
import LandingFooter from '../components/landing/LandingFooter';
import ShopHero from '../components/shop-landing/ShopHero';
import ShopCategoryGrid from '../components/shop-landing/ShopCategoryGrid';
import ShopMealKits from '../components/shop-landing/ShopMealKits';
import ShopDesserts from '../components/shop-landing/ShopDesserts';
import ShopQuickLogin from '../components/shop-landing/ShopQuickLogin';

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

export default function ShopPage() {
  return (
    <div
      className={`${bitter.variable} ${notoSansThai.variable} ${workSans.variable} font-body bg-cream text-charcoal`}
    >
      <LandingNav />
      <ShopHero />
      <ShopCategoryGrid />
      <ShopMealKits />
      <ShopDesserts />
      <ShopQuickLogin />
      <LandingFooter />
    </div>
  );
}
