import { BenefitsHighlight } from "@/components/sections/pricing/BenefitsHighlight";
import { PlansGrid } from "@/components/sections/pricing/PlansGrid";
import { PricingCTA } from "@/components/sections/pricing/PricingCTA";
import { PricingHero } from "@/components/sections/pricing/PricingHero";

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <main className="container mx-auto px-4 md:px-6">
        <BenefitsHighlight />
        <PlansGrid />
        <PricingCTA />
      </main>
    </>
  );
}
