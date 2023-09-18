'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import { BASE_URL } from '@/apis';
import { useNavbarContext } from '@/contexts/NavbarContext';
import { useSessionContext } from '@/contexts/SessionContext';
import HeaderLogo from '@/public/image/header_logo.svg';

import HeaderSearchBar from './HeaderSearchBar';

const LOGIN_URL = BASE_URL + '/login';
const LOGOUT_URL = BASE_URL + '/logout';

export default function Header() {
  const { navbarState } = useNavbarContext();
  return (
    <header
      className={`
        bg-white fixed top-0 right-0 h-[9.25rem] px-[3.75rem] pt-[51px] flex justify-between gap-4 overflow-scroll no-scrollbar
        ${navbarState.type === 'closed' ? 'left-[6.25rem]' : 'left-[11rem]'}
      `}
    >
      <Link href="/">
        <HeaderLogo />
      </Link>
      <HeaderRight />
    </header>
  );
}

function HeaderRight() {
  const { isEnglish, changeLanguage } = useLanguage();
  const { user } = useSessionContext();

  const t = useTranslations('Header');

  const langButtonText = isEnglish ? '한국어' : 'english';

  return (
    <div className="flex flex-col gap-4 items-end flex-grow">
      <div className="font-yoon text-xs font-normal flex gap-3">
        {user ? (
          <Link href={LOGOUT_URL} className="hover:text-main-orange">
            {t('로그아웃')}
          </Link>
        ) : (
          <Link href={LOGIN_URL} className="hover:text-main-orange">
            {t('로그인')}
          </Link>
        )}
        <span>|</span>
        <button onClick={changeLanguage} className="hover:text-main-orange">
          {langButtonText}
        </button>
      </div>
      <HeaderSearchBar />
    </div>
  );
}

const useLanguage = () => {
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
};
