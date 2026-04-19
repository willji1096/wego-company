import { Hero } from "@/components/sections/home/Hero";
import { TechIntro } from "@/components/sections/home/TechIntro";
import { KPIMetrics } from "@/components/sections/home/KPIMetrics";
import { BusinessPortfolio } from "@/components/sections/home/BusinessPortfolio";
import { RnDCenter } from "@/components/sections/home/RnDCenter";
import { WeGoNow } from "@/components/sections/home/WeGoNow";
import { ContactCTA } from "@/components/sections/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechIntro />
      <KPIMetrics />
      <BusinessPortfolio />
      <RnDCenter />
      <WeGoNow />
      <ContactCTA />
    </>
  );
}
