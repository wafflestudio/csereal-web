/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // reference: https://react-svgr.com/docs/next/
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
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `http://cse-dev-waffle.bacchus.io/:path*`,
      },
    ];
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
    ],
  },

  output: 'standalone',
};

module.exports = nextConfig;
