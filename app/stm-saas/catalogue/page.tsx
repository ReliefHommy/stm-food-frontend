import CatalogueNavbar from "@/app/components/saas/catalogue/CatalogueNavbar";
import CataloguePreview from "@/app/components/saas/catalogue/CataloguePreview";
import ShareCatalogueBox from "@/app/components/saas/catalogue/ShareCatalogueBox";








export default function FoodPage() {
  return (
    
    <section className="px-4 md:px-8 lg:px-12 py-8">
        <CatalogueNavbar/>
      
           <CataloguePreview/>

      <ShareCatalogueBox/>
    </section>
  )
}