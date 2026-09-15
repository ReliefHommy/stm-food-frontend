// app/events/page.tsx
import { Bitter, Noto_Sans_Thai, Work_Sans } from 'next/font/google';
import LandingNav from '../components/landing/LandingNav';
import LandingFooter from '../components/landing/LandingFooter';
import HeroEvents from '../components/event/HeroEvent';
import EventContentFeed from '../components/event/EventContentFeed';
import FeaturedThisWeek from '../components/event/FeaturedThisWeek';



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
    <main className="mx-auto max-w-[1280px] px-4 pb-16 pt-6 lg:px-6">
      <div
      className={`${bitter.variable} ${notoSansThai.variable} ${workSans.variable} font-body text-charcoal bg-[#422646]-50 dark:bg-[#422646]-950 min-h-screen`}
    >
      <LandingNav />
      <HeroEvents/>
      <FeaturedThisWeek/>
          <div className="space-y-8">
            <EventContentFeed
  title="All Events in EU Locations" 
/>
                     </div>
      <LandingFooter/>

  
    </div>
    </main>
    
  );
}