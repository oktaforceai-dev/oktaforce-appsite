// app/[locale]/layout.tsx
import {NextIntlClientProvider} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return [{locale: 'pt'}, {locale: 'en'}];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const {locale} = params;
  setRequestLocale(locale);
  const messages = (await import(`@/messages/${locale}.ts`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} />
    </NextIntlClientProvider>
  );
}
