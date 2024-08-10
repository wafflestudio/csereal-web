import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { getUserState } from './actions/session';
import { AUDIT_LOCALE_COOKIE_DISABLED } from './constants/audit';
import { LOGIN_URL } from './constants/network';

const handleI18nRouting = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ko'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'ko',

  localePrefix: 'as-needed',

  localeDetection: !AUDIT_LOCALE_COOKIE_DISABLED,
});

const isAuthRequired = (pathname: string) => {
  if (pathname.startsWith('/en')) pathname = pathname.slice(3);

  if (pathname.startsWith('/admin')) return true;

  return pathname.endsWith('create') || pathname.endsWith('edit');
};

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (isAuthRequired(pathname)) {
    const isStaff = await getUserState();
    if (isStaff !== 'staff') {
      return Response.redirect(new URL(LOGIN_URL));
    }
  }

  const response = handleI18nRouting(request);

  return response;
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
