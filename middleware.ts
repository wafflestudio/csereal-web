import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { isDev } from '@/constants/env';
import { routing } from '@/i18n/routing';

import { getUserState } from './actions/session';
import { BASE_URL, LOGIN_URL } from './constants/network';

const handleI18nRouting = createMiddleware(routing);

const isAuthRequired = (pathname: string) => {
  if (pathname.startsWith('/en')) pathname = pathname.slice(3);
  return pathname.startsWith('/admin') || pathname.endsWith('create') || pathname.endsWith('edit');
};

const generateCSPHeader = (nonce: string) =>
  `
    default-src 'self';
    script-src 'self' ${
      process.env.NODE_ENV === 'production'
        ? `'nonce-${nonce}' 'strict-dynamic' https://dapi.kakao.com`
        : `'unsafe-inline' 'unsafe-eval' https://t1.daumcdn.net https://dapi.kakao.com`
    };
    style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com;
    img-src 'self' blob: data: https://t1.daumcdn.net https://map.daumcdn.net https://mts.daumcdn.net https://cse-dev-waffle.bacchus.io/;
    font-src 'self' https://cdn.jsdelivr.net https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`
    .replace(/\s{2,}/g, ' ')
    .trim();

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 관리자 페이지는 스태프 계정으로 로그인되어있어야한다.
  if (isAuthRequired(pathname)) {
    const isStaff = await getUserState();
    if (isStaff !== 'staff') {
      if (isDev) {
        return Response.redirect(new URL(BASE_URL));
      } else {
        return Response.redirect(new URL(LOGIN_URL));
      }
    }
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const cspHeader = generateCSPHeader(nonce);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const req = new NextRequest(request, { headers: requestHeaders });
  const res = handleI18nRouting(req);
  res.headers.set('Content-Security-Policy', cspHeader);

  return res;
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
