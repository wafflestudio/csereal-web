import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { getIsStaff } from './actions/session';
import { LOGIN_URL } from './constants/network';

const handleI18nRouting = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ko'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'ko',

  localePrefix: 'as-needed',
});

const isAuthRequired = (pathname: string) => {
  if (pathname.startsWith('/en')) pathname = pathname.slice(3);

  if (pathname.startsWith('/admin')) return true;

  if (pathname.startsWith('/community')) {
    return pathname.endsWith('create') || pathname.endsWith('edit');
  } else {
    return false;
  }
};

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (isAuthRequired(pathname)) {
    const isStaff = await getIsStaff();
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
