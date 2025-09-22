import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type {ReactNode} from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return [{ locale: 'pt' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </NextIntlClientProvider>
  );
}
