const exclude = [
  '/admin',
  '/community/notice/create',
  '/community/news/create',
  '/community/seminar/create',
  '/en/community/notice/create',
  '/en/community/news/create',
  '/en/community/seminar/create',
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://cse.snu.ac.kr',
  generateRobotsTxt: true,
  changefreq: 'always',
  exclude,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: exclude,
      },
    ],
  },
};
