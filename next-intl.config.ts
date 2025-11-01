import {defineRouting} from 'next-intl/routing';
import {defaultLocale, locales, pathnames} from './src/i18n/config';

const routing = defineRouting({
  locales: Array.from(locales),
  defaultLocale,
  localePrefix: 'as-needed',
  localeCookie: false,
  pathnames
});

export default routing;
