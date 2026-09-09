import FarmerHero from "../components/farmer/FarmerHero";
import FarmerSearchFilters from "../components/farmer/FarmerSearchFilters";
import FarmerRegions from "../components/farmer/FarmerRegions";
import FarmerGrid from "../components/farmer/FarmerGrid";
import FarmerCTA from "../components/farmer/FarmerCTA";

export default function FarmersPage() {
  return (
    <main className="bg-[#faf8f3]">
      <FarmerHero />
      <FarmerSearchFilters />
      <FarmerRegions />
      <FarmerGrid />
      <FarmerCTA />
    </main>
  );
}
