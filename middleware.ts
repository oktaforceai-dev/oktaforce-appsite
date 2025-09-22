import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
  localePrefix: 'as-needed',
  // Não usar cookie de idioma; PT será padrão fora de /en
  localeCookie: false,
  // Sem auto-detecção de navegador
  localeDetection: false
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
