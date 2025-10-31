// app/[locale]/layout.tsx
import {NextIntlClientProvider} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';

export function generateStaticParams() {
  return [{locale: 'pt'}, {locale: 'en'}];
}

type LocaleParams = {locale: string};
type LocaleLayoutProps = {
  children: React.ReactNode;
  params?: Promise<LocaleParams>;
};

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const resolvedParams = params ? await params : {locale: 'pt'};
  const {locale} = resolvedParams;
  setRequestLocale(locale);
  const messages = (await import(`@/messages/${locale}.ts`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
