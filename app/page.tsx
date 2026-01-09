import FeaturedCategories from './components/homepage/FeaturedCategories';
import Footer from './components/homepage/Footer';
import MainNavbar from './components/homepage/MainNavbar';
import MasonryGrid from './components/homepage/MasonryRecipe';
import NewAddProducts from './components/homepage/NewAddProducts';
import NewsletterSignup from './components/homepage/NewsletterSignup';
import PartnerCallout from './components/homepage/PartnerCallout';
import RecipeCarousel from './components/homepage/RecipeCarousel';
import Layout from './layout';
//import Button from './components/Button';

export default function HomePage() {
    const RecipePosts = [
  {
    id: 1,
    title: "Shrimp Fried Rice",
    image: "/recipes/na11.png",
    description: "the popular Thai street food ever menu, just simple cooking at home...",
    tags: ["Shrimp ", "Fried Rice"],
  },
  {
    id: 2,
    title: "Spicy Grilled Beef Salad",
    image: "/recipes/th33.png",
    description: "Refreshing scent with fresh lime juice and roasted rice powder. it becomes an amazingly mellow taste.",
    tags: ["Mindfulness"],
  },
  {
    id: 3,
    title: "Spaghetti with Spicy Seafood.",
    image: "/recipes/na33.png",
    description: "The aroma of basil combined with the boldness of fresh chilis. this dish change the story of spaghetti into a hot Thai menu",
    tags: ["Healing", "Massage"],
  },
 

  // add more cards...
];
  return (
   
      <Layout>
 
 
      <MainNavbar />

     
      <FeaturedCategories />{/* Shop by category */}
      <RecipeCarousel /> {/* Explore weekly Deals */}
 <NewAddProducts/>{/* New add produxts */}


       <MasonryGrid cards={RecipePosts} />
      <PartnerCallout />
      <NewsletterSignup />
      <Footer />
      
    </Layout>

  
      
  );
}
