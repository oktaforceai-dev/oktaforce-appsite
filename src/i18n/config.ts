import {SUPPORTED_LOCALES, DEFAULT_LOCALE} from '@/src/lib/routes';

export const locales = SUPPORTED_LOCALES;
export const defaultLocale = DEFAULT_LOCALE;

export const pathnames = {
  '/': '/',
  '/solucoes': {pt: '/solucoes', en: '/solutions'},
  '/quem-somos': {pt: '/quem-somos', en: '/about'},
  '/contato': {pt: '/contato', en: '/contact'},
  '/saibamais': {pt: '/saibamais', en: '/learn-more'},
  '/blog': {pt: '/blog', en: '/blog'},
  '/diferenciais': {pt: '/diferenciais', en: '/differentials'},
  '/precos': {pt: '/precos', en: '/pricing'},
  '/solutions': {pt: '/solucoes', en: '/solutions'},
  '/about': {pt: '/quem-somos', en: '/about'},
  '/contact': {pt: '/contato', en: '/contact'},
  '/pricing': {pt: '/precos', en: '/pricing'},
  '/differentials': {pt: '/diferenciais', en: '/differentials'},
  '/learn-more': {pt: '/saibamais', en: '/learn-more'}
} as const;
