import {createNavigation} from 'next-intl/navigation';
export const locales = ['pt', 'en'] as const;
export const defaultLocale = 'pt';
export const localePrefix = 'as-needed' as const;
export const {Link, usePathname, useRouter, redirect} = createNavigation({
  locales,
  defaultLocale,
  localePrefix
});
export {};
