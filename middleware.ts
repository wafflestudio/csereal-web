import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { getUserState } from '@/actions/session';
import { Role } from '@/apis/types/role';
import { BASE_URL, isProd } from '@/constants/env';
import { PROD_LOGIN_URL } from '@/constants/network';
import { routing } from '@/i18n/routing';

const handleI18nRouting = createMiddleware(routing);

// TODO: 페이지별 권한관리가 개판이라서 정리 한 번 해줘야 함
const getRequiredAuth = (pathname: string): Role | undefined => {
  if (pathname.startsWith('/en')) pathname = pathname.slice(3);
  if (pathname.startsWith('/admin') || pathname.endsWith('create')) return 'ROLE_STAFF';

  if (pathname.endsWith('edit')) {
    if (pathname.includes('council')) return 'ROLE_COUNCIL';
    else return 'ROLE_STAFF';
  }
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
  const requiredAuth = getRequiredAuth(pathname);

  const isValidState =
    userState === 'ROLE_STAFF' ||
    (isCouncilRequired(pathname) && userState === 'ROLE_COUNCIL') ||
    requiredAuth === undefined;

  if (!isValidState) {
    if (isProd) {
      return Response.redirect(new URL(PROD_LOGIN_URL));
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
  if (userState !== 'logout') {
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set('Content-Security-Policy', cspHeader);
  }
  const req = new NextRequest(request, { headers: requestHeaders });

  const res = handleI18nRouting(req);
  if (userState === 'logout') {
    res.headers.set('Content-Security-Policy', cspHeader);
  }

  return res;
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
