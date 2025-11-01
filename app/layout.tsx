// app/layout.tsx
import type {Metadata} from 'next';
import './globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {montserrat, roboto} from '@/app/fonts';
import {OG_IMAGE, SITE_URL} from '@/lib/siteConfig';
import AppProviders from '@/app/providers';
import {DEFAULT_LOCALE} from '@/src/lib/routes';
import {loadMessages} from '@/src/i18n/request';

const defaultDescription =
  'Portaria remota com IA proprietária, monitoramento 24/7, redundância N+2 e equipe local dedicada.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'OKTAFORCE - Segurança inteligente para condomínios', template: '%s - OKTAFORCE' },
  description: defaultDescription,
  alternates: { canonical: '/', languages: { 'pt-BR': '/', 'en-US': '/en' } },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'OKTAFORCE',
    description: defaultDescription,
    siteName: 'OKTAFORCE',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'OKTAFORCE' }]
  },
  twitter: { card: 'summary_large_image', title: 'OKTAFORCE', description: defaultDescription, images: [OG_IMAGE] },
  icons: { icon: '/logo.svg' }
};

export const dynamic = 'force-static';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = DEFAULT_LOCALE;
  const messages = await loadMessages(locale);

  return (
    <html lang={locale} className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppProviders>{children}</AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
