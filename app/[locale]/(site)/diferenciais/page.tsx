import type { Metadata } from "next";

// import { DifferentialsHero } from "@/components/sections/differentials/DifferentialsHero";
// import { ValueGridSection } from "@/components/sections/differentials/ValueGridSection";
// import { ComparisonTable } from "@/components/sections/differentials/ComparisonTable";
// import { MetricsSection } from "@/components/sections/differentials/MetricsSection";
// import { ProofSection } from "@/components/sections/differentials/ProofSection";
// import { DifferentialsCTA } from "@/components/sections/differentials/DifferentialsCTA";

// export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
//   const {locale} = await params;
//   return {
//     title: 'Diferenciais | OktaForce',
//     description: 'Descubra por que a OktaForce é a escolha certa para sua segurança.'
//   };
// }

export default function DifferentialsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold">Diferenciais</h1>
      <p className="text-white/70">Página em desenvolvimento.</p>
    </main>
  );
}
