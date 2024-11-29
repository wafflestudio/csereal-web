'use client';

import { useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { startTransition } from 'react';

import { usePathname, useRouter } from '@/i18n/routing';

export default function useLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const locale = useLocale();
  const isEnglish = locale === 'en';

  const changeLanguage = () => {
    startTransition(() => {
      router.push(pathname + params, { locale: isEnglish ? 'ko' : 'en' });
    });
  };

  return { isEnglish, changeLanguage };
}
