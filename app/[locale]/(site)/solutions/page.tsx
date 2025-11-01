import SolutionsHero from '@/components/sections/solutions/SolutionsHero';
import {SolutionModules} from '@/components/sections/solutions/SolutionModules';
import {SolutionsComparison} from '@/components/sections/solutions/ComparisonSection';
import {SolutionsCTA} from '@/components/sections/solutions/SolutionsCTA';
import {generateLocaleParams} from '@/src/lib/routes';

export const dynamic = 'force-static';
export const revalidate = false;
export const generateStaticParams = generateLocaleParams;

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <main className="container mx-auto px-4 md:px-6">
        <section className="section">
          <SolutionModules />
        </section>
        <section className="section">
          <SolutionsComparison />
        </section>
        <section className="section">
          <SolutionsCTA />
        </section>
      </main>
    </>
  );
}
