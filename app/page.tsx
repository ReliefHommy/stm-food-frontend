
import ComplianceLayer from './components/homepage/ComplianceLayer';
import Footer from './components/homepage/Footer';
import HeroSection from './components/homepage/HeroSection';
import MainNavbar from './components/homepage/MainNavbar';
import WhatIsSTM from './components/homepage/WhatIsSTM';
import MasonryGrid from './components/shop/MasonryRecipe';
import NewAddProducts from './components/shop/NewAddProducts';




import Layout from './layout';
//import Button from './components/Button';

export default function HomePage() {

  return (
   
      <Layout>
 
 


     
    
      <MainNavbar />


  <HeroSection />
   <WhatIsSTM />
    <ComplianceLayer />
      <NewAddProducts />
  
    <MasonryGrid cards={[]} />
  
      <Footer />
      
    </Layout>

  
      
  );
}
