/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.daikoomyo.fr',
  generateRobotsTxt: true,
  exclude: ['/back-office', '/back-office/*'], 
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/back-office', '/back-office/*'],
      },
    ],
  },
};
