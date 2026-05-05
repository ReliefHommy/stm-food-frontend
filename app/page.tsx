

import AboutSection from "./components/saas/landing/AboutSection"
import AiBussinessTools from "./components/saas/landing/AiBussinessTool"
import ContactSection from "./components/saas/landing/ContactSection"
import PricingPlans from "./components/saas/landing/PricingPlans"
import SaaSFooter from "./components/saas/landing/SaaSFooter"
import SaaSHero from "./components/saas/landing/SaaSHero"
import SaaSNavbar from "./components/saas/landing/SaaSNavbar"
import WhatWeBuild from "./components/saas/landing/whatWeDo"




export default function FoodMarketSubscription() {
  return (
    
    <section className="px-4 md:px-8 lg:px-12 py-8">
      
<SaaSNavbar/>
<SaaSHero/>
<WhatWeBuild/>
<AiBussinessTools />
<PricingPlans />
    <AboutSection />
    <ContactSection />
    <SaaSFooter />
    </section>
  )
}
