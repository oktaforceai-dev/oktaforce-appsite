export { Link, redirect, useRouter, usePathname, getPathname } from '@/i18n/routing';

export const APP_LOCALES = ['pt', 'en'] as const;
export type AppLocale = (typeof APP_LOCALES)[number];
