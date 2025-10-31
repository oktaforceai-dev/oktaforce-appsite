// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const isStaticExport = process.env.NEXT_OUTPUT_EXPORT === 'true';

export default withNextIntl({
  reactStrictMode: true,
  trailingSlash: true,
  ...(isStaticExport ? {output: 'export'} : {})
});
