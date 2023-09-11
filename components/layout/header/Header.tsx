'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import useSWR from 'swr';

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
  const { user, autoLogin } = useSessionContext();

  const t = useTranslations('Header');

  const langButtonText = isEnglish ? '한국어' : 'english';
  console.log(user);

  useEffect(() => {
    if (!user) autoLogin();
  }, [user, autoLogin]);

  return (
    <div className="flex flex-col gap-4 items-end flex-grow">
      <div className="font-yoon text-xs font-normal flex gap-3">
        {user ? (
          // <span className="text-neutral-500">|</span>
          <Link href={LOGOUT_URL}>
            <button>{t('로그아웃')}</button>
          </Link>
        ) : (
          <Link href={LOGIN_URL}>
            <button>{t('로그인')}</button>
          </Link>
        )}
        <span>|</span>
        <button onClick={changeLanguage}>{langButtonText}</button>
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
      router.push(`/ko${path.slice(3)}${searchParams}`);
    } else {
      router.push(`/en${path}?${searchParams}`);
    }
  };

  return { isEnglish, changeLanguage };
};
