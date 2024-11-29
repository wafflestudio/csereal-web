import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ko'],
  defaultLocale: 'ko',
  localePrefix: 'as-needed',
  // 보안 검수에서 strict을 제외한 쿠키 사용을 금지해서 끈다.
  localeDetection: false,
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
