const siteUrl = process.env.SITE_URL ?? 'https://www.oktaforce.com.br';

const highPriorityPaths = [/^\/(solucoes|precos)$/i, /^\/en\/(solutions|pricing)$/i];

export default {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  transform: async (_, path) => ({
    loc: path,
    changefreq: path === '/' || path === '/en' ? 'daily' : 'weekly',
    priority:
      path === '/' || path === '/en'
        ? 1.0
        : highPriorityPaths.some((regex) => regex.test(path))
        ? 0.8
        : 0.6,
    lastmod: new Date().toISOString()
  }),
  robotsTxtOptions: {
    policies: [
      {userAgent: '*', allow: '/'},
      {userAgent: '*', disallow: ['/api/']}
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`]
  }
};
