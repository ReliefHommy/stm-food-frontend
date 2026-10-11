import type { Metadata } from "next";
import LandingFooter from "../components/landing/LandingFooter";
import LandingNav from "../components/landing/LandingNav";

export const metadata: Metadata = {
  title: "About Somtam Market | Visual Dish Profiles & Thai Events in Europe",
  description:
    "Discover the heart of Thai culture in the EU. Somtam Market connects authentic Asian ingredients with the European kitchen through interactive, hand-illustrated Dish Profiles, food storytelling, and curated cultural events.",
  alternates: {
    canonical: 'https://somtammarket.com/about',
  },
  openGraph: {
    title: 'About Somtam Market | Visualizing Authentic Thai Food & Culture',
    description: 'Bridging Thailand and the EU through interactive food art, authentic ingredients, and cultural events.',
    images: [{ url: '/https://pub-2a72cfdc56dc408cbaa236e02a09710b.r2.dev/thefood/curry-paste/stm-red-curry-pasta-mind.jpg' }], // Consider updating to an image of your illustrated curry paste/dish profile
  }
};

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
         <LandingNav />
     
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-16 md:px-6 lg:px-8">
        {/* Page Header */}
           <h2>About us</h2>
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
           About STM Marketplace
          </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Bridging the gap between authentic ingredients and the Swedish kitchen through art, tech, and storytelling.</h1>
        </header>
                {/* Our story */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Our Story: From a street food stall in Chiang Rai to Sweden with a Global Heart.
          </h2>
          <p className="text-slate-700">
        Somtam Market was born from a memory of a street food stall in Chiang Rai, Thailand. Every morning, before the city woke up, my mother would decide which curries to cook for the day, and my job was to prepare the curry paste. I learned early on that a dish is more than just food—it is a story, a specific combination of ingredients, and a daily ritual.</p>
       
        <br/>
        <p className="text-slate-700">
      Today, Somtam Market is a digital platform that brings those stories to life. Built from the ground up by a self-taught programmer and food illustrator, our platform uses rich, visual "Dish Profiles" to map out authentic Southeast Asian cuisine.  </p>
       

        </section>
                {/* What we do */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          What we do:
          </h2>
          <p className="text-slate-700">
         We believe that the biggest barrier to cooking authentic Asian food at home is intimidation. People see a jar of curry paste or a bottle of fish sauce on a supermarket shelf and don't know the story behind it.
<br/>
Through beautiful, hand-drawn illustrations and interactive web design, Somtam Market breaks down complex dishes into visual ingredient maps. We show consumers exactly what goes into a dish, how it should look, and the cultural history behind it.</p>

        </section>


        {/* Mission Section */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          Our Mission: Bridging Thai Culture and Europe
          </h2>
          <p className="text-slate-700">
            Bridging Bangkok and Europe Our mission is to give Thai culture a modern, EU-ready digital home. From our base in Sweden, we build tools and experiences that scale across the EU—so Thai culture becomes easier to access, share, and enjoy, no matter which city you call home.
          </p>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>
              • <span className="font-medium">Food:</span> Discover Thai
              ingredients, recipes, and food brands that bring real Bangkok
              flavours into European kitchens.
            </li>
            <li>
              • <span className="font-medium">Wellness:</span> Explore Thai
              wellness ideas, calm living practices, and products that support
              body, mind, and spirit.
            </li>
            <li>
              • <span className="font-medium">Games:</span> Enjoy story-driven,
              puzzle and escape-style games inspired by Thai and global culture,
              created by an indie studio.
            </li>
          </ul>
          <p className="text-slate-700">
            From our base in Sweden, we build tools, content, and experiences
            that can scale across the EU—so Thai culture becomes easier to
            access, share, and enjoy wherever you live.
          </p>
        </section>
                        {/* Partner with us */}
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          Partner With Us:
          </h2>
          <p className="text-slate-700">
We are actively looking to partner with premium Asian food importers, distributors, and brands. By integrating your specific products (rice, sauces, pastes) into our visual Dish Profiles, we help educate your consumers, inspire home cooks, and bring the vibrant culture of Asian street food directly to their screens.

Contact us to see how we can illustrate your ingredients and tell your brand’s story.</p>

        </section>


     




        


      </div>
      
      <LandingFooter/>
    </main>
  );
};

export default AboutPage;