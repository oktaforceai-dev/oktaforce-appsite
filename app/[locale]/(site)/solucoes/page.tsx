import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import { SolutionModules } from "@/components/sections/solutions/SolutionModules";
import { SolutionsComparison as ComparisonSection } from "@/components/sections/solutions/ComparisonSection";
import { SolutionsSupport as SupportSection } from "@/components/sections/solutions/SupportSection";
import { SolutionsCTA } from "@/components/sections/solutions/SolutionsCTA";

export default function SolutionsPage() {
  return (
    <main className="container mx-auto px-4 md:px-6">
      <SolutionsHero />
      <SolutionModules />
      <ComparisonSection />
      <SupportSection />
      <SolutionsCTA />
    </main>
  );
}
