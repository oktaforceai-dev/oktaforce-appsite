import {generateLocaleParams} from '@/src/lib/routes';

export const dynamic = 'force-static';
export const revalidate = false;
export const generateStaticParams = generateLocaleParams;

export default function DifferentialsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold">Diferenciais</h1>
      <p className="text-white/70">Página em desenvolvimento.</p>
    </main>
  );
}
