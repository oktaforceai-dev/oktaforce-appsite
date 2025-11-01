import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import {DEFAULT_LOCALE, SUPPORTED_LOCALES} from '@/src/lib/routes';

type SiteLayoutParams = {locale?: string};

type SiteLayoutProps = {
  children: React.ReactNode;
  params?: Promise<SiteLayoutParams>;
};

function normalizeLocale(locale?: string) {
  if (!locale) return DEFAULT_LOCALE;
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale as (typeof SUPPORTED_LOCALES)[number])
    ? (locale as (typeof SUPPORTED_LOCALES)[number])
    : DEFAULT_LOCALE;
}

export default async function SiteLayout({children, params}: SiteLayoutProps) {
  const resolvedParams = params ? await params : {locale: DEFAULT_LOCALE};
  const locale = normalizeLocale(resolvedParams.locale);

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
