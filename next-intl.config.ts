// next-intl.config.ts
import {defineRouting} from 'next-intl/routing';

const routing = defineRouting({
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
  localePrefix: 'as-needed',
  localeCookie: false,
  pathnames: {
    '/': '/',
    '/about':         {pt: '/quem-somos',   en: '/about'},
    '/solutions':     {pt: '/solucoes',     en: '/solutions'},
    '/pricing':       {pt: '/precos',       en: '/pricing'},
    '/contact':       {pt: '/contato',      en: '/contact'},
    '/blog':          {pt: '/blog',         en: '/blog'},
    '/differentials': {pt: '/diferenciais', en: '/differentials'}
  }
});

export default routing;
