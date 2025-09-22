export const dynamic = 'force-dynamic';

import type { Metadata } from "next";

import HeroSection from "@/components/sections/home/HeroSection";
import { PainPoints } from "@/components/sections/home/PainPoints";
import { BenefitsGrid } from "@/components/sections/home/BenefitsGrid";
import { IntelligenceSection } from "@/components/sections/home/IntelligenceSection";
import { DifferentialsHighlights } from "@/components/sections/home/DifferentialsHighlights";
import { FAQSection } from "@/components/sections/home/FAQSection";
import { FinalCTA } from "@/components/sections/home/FinalCTA";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <main className="container mx-auto px-4 md:px-6">
        <section className="section">
          <PainPoints />
        </section>
        <section className="section">
          <BenefitsGrid />
        </section>
        <section className="section">
          <IntelligenceSection />
        </section>
        <section className="section">
          <DifferentialsHighlights />
        </section>
        <section className="section">
          <FAQSection />
        </section>
        <section className="section">
          <FinalCTA />
        </section>
      </main>
    </>
  );
}