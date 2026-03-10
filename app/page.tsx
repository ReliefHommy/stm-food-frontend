
import BuyerSection from './components/homepage/BuyerSection';
import ClusterShipping from './components/homepage/ClusterShipping';
import ComplianceLayer from './components/homepage/ComplianceLayer';
import FarmMapNetwork from './components/homepage/FarmMapNetwork';
import Footer from './components/homepage/Footer';
import HeroSection from './components/homepage/HeroSection';
import MainNavbar from './components/homepage/MainNavbar';
import WhatIsSTM from './components/homepage/WhatIsSTM';





import Layout from './layout';
//import Button from './components/Button';

export default function HomePage() {

  return (
   
      <Layout>
 
 


     
    
      <MainNavbar />


  <HeroSection />
   <WhatIsSTM />
    <ComplianceLayer />
      <FarmMapNetwork />
  
    <BuyerSection/>
  <ClusterShipping/>
      <Footer />
      
    </Layout>

  
      
  );
}
