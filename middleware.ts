import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { Role } from '@/apis/types/role';
import { BASE_URL, isProd } from '@/constants/env';
import { routing } from '@/i18n/routing';

import { getUserState } from './actions/session';
import { PROD_LOGIN_URL } from './constants/network';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  // TODO: 선에디터 이슈로 임시 제거
  // 관리자 영역에서 제거한다고 해도 다른 페이지에서 라우팅한 경우 헤더가 남아있다
  // requestHeaders.set('x-nonce', nonce);
  // requestHeaders.set('Content-Security-Policy', cspHeader);

  const req = new NextRequest(request, { headers: requestHeaders });
  const res = handleI18nRouting(req);
  // TODO: 선에디터 이슈로 임시 제거
  // res.headers.set('Content-Security-Policy', cspHeader);

  return res;
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
