export const SUPPORTED_LOCALES = ['pt', 'en'] as const;
export const DEFAULT_LOCALE = 'pt';

export const STATIC_PAGES = [
  '',
  'solucoes',
  'quem-somos',
  'contato',
  'saibamais',
  'blog',
  'diferenciais',
  'precos',
  'solutions',
  'about',
  'pricing',
  'contact',
  'differentials'
] as const;

export const generateLocaleParams = () =>
  SUPPORTED_LOCALES.map((locale) => ({locale}));
