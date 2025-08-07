import FeaturedCategories from './components/homepage/FeaturedCategories';
import Footer from './components/homepage/Footer';
import HeroBanner from './components/homepage/HeroBanner';
import Navbar from './components/homepage/Navbar';
import NewsletterSignup from './components/homepage/NewsletterSignup';
import PartnerCallout from './components/homepage/PartnerCallout';
import RecipeCarousel from './components/homepage/RecipeCarousel';
import Layout from './layout';
//import Button from './components/Button';

export default function HomePage() {
  return (
   
      <Layout>
  <Navbar/>
      <HeroBanner />
      <FeaturedCategories />
      <RecipeCarousel />
      <PartnerCallout />
      <NewsletterSignup />
      <Footer />
      
    </Layout>

  
      
  );
}
