import {getLocale, getTranslations} from "next-intl/server";
import {BreadcrumbJsonLd} from "@/components/seo/BreadcrumbJsonLd";
import {getPathname} from "@/lib/navigation";

export async function PricingBreadcrumbs() {
  const locale = await getLocale();
  const nav = await getTranslations({locale, namespace: "common.navigation"});
  const items = [
    {name: nav("home"), url: getPathname({ locale, href: '/' as any })},
    {name: nav("pricing"), url: getPathname({ locale, href: '/pricing' as any })}
  ];

  return <BreadcrumbJsonLd items={items} />;
}
