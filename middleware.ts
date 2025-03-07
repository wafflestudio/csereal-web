import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { isProd } from '@/constants/env';
import { routing } from '@/i18n/routing';

import { getUserState } from './actions/session';
import { BASE_URL, LOGIN_URL } from './constants/network';

const handleI18nRouting = createMiddleware(routing);

const isAuthRequired = (pathname: string) => {
  if (pathname.startsWith('/en')) pathname = pathname.slice(3);
  return pathname.startsWith('/admin') || pathname.endsWith('create') || pathname.endsWith('edit');
};

const isCouncilRequired = (pathname: string) => {
  if (pathname.startsWith('/en')) pathname = pathname.slice(3);
  return (
    pathname.includes('/council') && (pathname.endsWith('create') || pathname.endsWith('edit'))
  );
};

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const userState = await getUserState();
  // 관리자 페이지는 스태프 계정으로 로그인되어있어야한다.
  // 학생회 편집 페이지는 학생회 혹은 스태프 계정으로 로그인되어 있어야 한다.
  const isValidState =
    userState === 'ROLE_STAFF' ||
    (isCouncilRequired(pathname) && userState === 'ROLE_COUNCIL') ||
    !isAuthRequired(pathname);

  if (!isValidState) {
    if (isProd) {
      return Response.redirect(new URL(LOGIN_URL));
    } else {
      return Response.redirect(new URL(BASE_URL));
    }
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const cspHeader = `
    default-src 'self';
    script-src 'self' https://t1.daumcdn.net https://dapi.kakao.com ${
      isProd ? `'nonce-${nonce}' 'strict-dynamic'` : `'unsafe-inline' 'unsafe-eval'`
    };
    style-src 'self' 'nonce-${nonce}' https://cdn.jsdelivr.net https://fonts.googleapis.com;
    img-src 'self' blob: data: https://t1.daumcdn.net https://map.daumcdn.net https://mts.daumcdn.net https://cse-dev-waffle.bacchus.io https://cse.snu.ac.kr;
    font-src 'self' https://cdn.jsdelivr.net https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`
    .replace(/\s{2,}/g, ' ')
    .trim();

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
