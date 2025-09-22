import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactMap } from "@/components/sections/contact/ContactMap";

export const dynamic = 'force-dynamic';

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