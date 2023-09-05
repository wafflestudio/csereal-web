import { usePathname } from 'next/navigation';

export function useLanguage() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  return isEnglish ? { isEnglish: true } : { isEnglish: false };
}
