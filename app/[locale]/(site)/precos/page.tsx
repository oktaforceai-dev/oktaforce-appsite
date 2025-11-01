import {BenefitsHighlight} from '@/components/sections/pricing/BenefitsHighlight';
import {PlansGrid}from '@/components/sections/pricing/PlansGrid';
import {PricingCTA}from '@/components/sections/pricing/PricingCTA';
import {PricingHero}from '@/components/sections/pricing/PricingHero';
import {generateLocaleParams} from '@/src/lib/routes';

export const dynamic = 'force-static';
export const revalidate = false;
export const generateStaticParams = generateLocaleParams;

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
