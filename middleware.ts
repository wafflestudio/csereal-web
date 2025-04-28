import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { BASE_URL, isProd } from '@/constants/env';
import { routing } from '@/i18n/routing';

import { getUserState } from './actions/session';
import { PROD_LOGIN_URL } from './constants/network';
import { getRequiredAuth } from './utils/auth';

const handleI18nRouting = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const userState = await getUserState();

  const requiredAuth = getRequiredAuth(pathname);
  const isValidState = requiredAuth.includes(userState);

  if (!isValidState) {
    const redirectUrl = isProd ? PROD_LOGIN_URL : BASE_URL;
    return Response.redirect(new URL(redirectUrl));
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
