import {getRequestConfig} from 'next-intl/server';
import {defaultLocale, locales} from './config';

export type Locale = (typeof locales)[number];

export function resolveLocale(input?: string | null): Locale {
  const value = (input ?? '').toLowerCase();
  const match = locales.find((locale) => value.startsWith(locale));
  return match ?? defaultLocale;
}

export async function loadMessages(locale: Locale) {
  return (await import(`../../messages/${locale}.ts`)).default;
}

export default getRequestConfig(async ({locale}) => {
  const normalized = resolveLocale(locale);
  const messages = await loadMessages(normalized);

  return {
    locale: normalized,
    messages
  };
});
