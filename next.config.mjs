import createNextIntlPlugin from 'next-intl/plugin';

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net;
    img-src 'self' blob: data:;
    font-src 'self' https://fonts.googleapis.com https://cdn.jsdelivr.net https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  logging: { fetches: { fullUrl: true } },

  experimental: {
    serverActions: {
      // 게시물 작성시 첨부파일 지원 목적
      bodySizeLimit: '10mb',

      // https://github.com/vercel/next.js/issues/58295
      allowedOrigins: [
        'csereal-prod.bacchus.io:443',
        'csereal-prod.bacchus.io',
        'cse.snu.ac.kr',
        'cse.snu.ac.kr:443',
        'id.snucse.org',
      ],
    },
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  // react-svgr 설정
  // https://react-svgr.com/docs/next/
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
        protocol: 'https',
        hostname: 'csereal-prod.bacchus.io',
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

  async headers() {
    return [
      {
        source: '/(.*)?', // 모든 페이지
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },

  poweredByHeader: false,
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
