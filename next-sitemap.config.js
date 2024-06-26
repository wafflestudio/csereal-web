/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://cse.snu.ac.kr',
  generateRobotsTxt: true,
  changefreq: 'always',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },

  additionalPaths: async () => {
    const typeToPath = async (type) => {
      const resp = await fetch(`https://cse-dev-waffle.bacchus.io/api/v1/${type}/ids`);
      const idList = await resp.json();
      return idList.flatMap((id) => [
        { loc: `/community/${type}/${id}` },
        { loc: `en/community/${type}/${id}` },
      ]);
    };

    const promiseList = ['notice', 'news', 'seminar'].map(typeToPath);

    return (await Promise.all(promiseList)).flatMap((x) => x);
  },
};
