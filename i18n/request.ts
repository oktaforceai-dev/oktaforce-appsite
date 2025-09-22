// i18n/request.ts
import {getRequestConfig} from 'next-intl/server';

const LOCALES = ['pt', 'en'] as const;

type Locale = (typeof LOCALES)[number];
const DEFAULT_LOCALE: Locale = 'pt';

function normalizeLocale(input?: string | null): Locale {
  const v = (input || '').toLowerCase();
  if (v.startsWith('en')) return 'en';
  if (v.startsWith('pt')) return 'pt';
  return DEFAULT_LOCALE;
}

export default getRequestConfig(async ({locale}) => {
  const safe = normalizeLocale(locale);

  const messages = safe === 'en'
    ? (await import('../messages/en')).default
    : (await import('../messages/pt')).default;

  return {locale: safe, messages};
});
