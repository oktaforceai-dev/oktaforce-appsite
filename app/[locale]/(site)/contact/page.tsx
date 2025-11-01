import type {Metadata} from 'next';
import {generateLocaleParams} from '@/src/lib/routes';

export const dynamic = 'force-static';
export const revalidate = false;
export const generateStaticParams = generateLocaleParams;

export const metadata: Metadata = {
  title: "Contato | OktaForce",
  description: "Entre em contato com a OktaForce para saber mais sobre nossas soluções de segurança e monitoramento inteligente.",
};

export {default} from '../contato/page';

//export default function ContactPage() {
 // return (
  //  <main className="container mx-auto px-4 py-12">
  //    <h1 className="text-3xl font-semibold">Contact</h1>
   //   <p className="text-white/70">Page under development.</p>
   // </main>
 // );
//}
