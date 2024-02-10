/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  images: {
    remotePatterns: [
      // 테스트용 이미지 관련
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cse.snu.ac.kr',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'cse-dev-waffle.bacchus.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cse-dev-waffle.bacchus.io',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
        port: '8080',
      },
    ],
  },

  redirects() {
    return [
      {
        source: '/login/success',
        destination: '/',
        permanent: false,
      },
      {
        source: '/logout/success',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts',
);

module.exports = withNextIntl(nextConfig);
