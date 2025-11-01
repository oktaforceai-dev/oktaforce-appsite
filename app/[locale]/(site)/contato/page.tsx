import {ContactHero} from '@/components/sections/contact/ContactHero';
import {ContactInfo} from '@/components/sections/contact/ContactInfo';
import {ContactForm} from '@/components/sections/contact/ContactForm';
import {ContactMap}from '@/components/sections/contact/ContactMap';
import {generateLocaleParams} from '@/src/lib/routes';

export const dynamic = 'force-static';
export const revalidate = false;
export const generateStaticParams = generateLocaleParams;

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <main className="container mx-auto px-4 md:px-6">
        <ContactInfo />
        <ContactForm />
        <ContactMap />
      </main>
    </>
  );
}
