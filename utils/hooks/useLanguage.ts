'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useLanguage() {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const isEnglish = path.startsWith('/en');

  const changeLanguage = () => {
    if (isEnglish) {
      router.push(`/ko${path.slice(3)}?${searchParams}`);
    } else {
      router.push(`/en${path}?${searchParams}`);
    }
  };

  return { isEnglish, changeLanguage };
}
