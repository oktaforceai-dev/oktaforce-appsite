import {NextIntlClientProvider} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {loadMessages, resolveLocale} from '@/src/i18n/request';
import {DEFAULT_LOCALE, SUPPORTED_LOCALES} from '@/src/lib/routes';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params?: Promise<{locale?: string}>;
};

export function generateStaticParams() {
  return Array.from(SUPPORTED_LOCALES, (locale) => ({locale}));
}

export const dynamic = 'force-static';

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const resolvedParams = params ? await params : {locale: DEFAULT_LOCALE};
  const locale = resolveLocale(resolvedParams.locale);

  setRequestLocale(locale);
  const messages = await loadMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
