import {Mail, MapPin, Phone, Instagram, Linkedin, Youtube} from "lucide-react";
import {getLocale, getTranslations} from "next-intl/server";
import {Link} from "@/i18n/routing";
import {ButtonLink} from "@/components/ui/ButtonLink";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SOCIAL_LINKS,
  WHATSAPP_LINK
} from "@/lib/siteConfig";

export default async function SiteFooter() {
  const locale = await getLocale();
  const t = await getTranslations("common.footer");
  const navigationT = await getTranslations("common.navigation");
  const rightsText = t("rights");

  const items = [
    {id: 'home', href: '/'},
    {id: 'about', href: '/about'},
    {id: 'solutions', href: '/solutions'},
    {id: 'pricing', href: '/pricing'},
//    {id: 'differentials', href: '/differentials'},
//    {id: 'blog', href: '/blog'},
    {id: 'contact', href: '/contact'}
  ] as const;

  return (
    <footer className="border-t border-transparent bg-surface-alt">
      <div className="section-container grid gap-8 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <h3 className="font-display text-lg font-semibold text-foreground">{t("title")}</h3>
          <p className="text-sm text-foreground/70">{t("description")}</p>
          <ButtonLink
            href={WHATSAPP_LINK}
            external
            eventName="cta_whatsapp_clicked"
            eventData={{page: "footer", locale}}
            size="md"
          >
            {t("cta")}
          </ButtonLink>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground/70">{t("quickLinks")}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {items.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-foreground/80 transition hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {navigationT(item.id as any)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground/70">{t("contact")}</h4>
          <p className="flex items-start gap-2 text-foreground/80">
            <MapPin className="mt-0.5 size-4" aria-hidden /> {CONTACT_ADDRESS}
          </p>
          <a
            href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-2 text-foreground/80 transition hover:text-brand"
          >
            <Phone className="size-4" aria-hidden /> {CONTACT_PHONE}
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2 text-foreground/80 transition hover:text-brand"
          >
            <Mail className="size-4" aria-hidden /> {CONTACT_EMAIL}
          </a>
            {/*<div className="pt-2">
            <h5 className="text-xs font-semibold uppercase tracking-wide text-foreground/60">{t("followUs")}</h5>
            <div className="mt-2 flex gap-3">
              <SocialIcon href={SOCIAL_LINKS.instagram} label="Instagram">
                <Instagram className="size-4" />
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.linkedin} label="LinkedIn">
                <Linkedin className="size-4" />
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.youtube} label="YouTube">
                <Youtube className="size-4" />
              </SocialIcon>
            </div>
          </div>  */}
        </div>
      </div>
      <div className="border-t border-transparent bg-surface py-6">
        <div className="section-container text-center text-xs text-foreground/60">
          <p>{t("legal", {year: new Date().getFullYear()})}</p>
          {rightsText?.trim() ? <p className="mt-1">{rightsText}</p> : null}
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({href, label, children}: {href: string; label: string; children: React.ReactNode}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center rounded-full border border-transparent p-2 text-foreground transition hover:border-brand/60 hover:text-brand"
    >
      {children}
    </a>
  );
}

