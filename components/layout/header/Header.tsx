'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { useNavbarContext } from '@/contexts/NavbarContext';
import HeaderLogo from '@/public/image/header_logo.svg';

import { logOut, login } from '@/apis/auth';

import HeaderSearchBar from './HeaderSearchBar';

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

  const t = useTranslations('Header');

  const langButtonText = isEnglish ? '한국어' : 'english';

  const handleLogin = () => {
    console.log('로그인 버튼 클릭');
  };
  const handleLogOut = () => {
    console.log('로그아웃 버튼 클릭');
  };

  return (
    <div className="flex flex-col gap-4 items-end flex-grow">
      <div className="font-yoon text-xs font-normal flex gap-3">
        <Link href="http://cse-dev-waffle.bacchus.io/login">
          <button onClick={handleLogin}>{t('로그인')}</button>
        </Link>
        <span className="text-neutral-500">|</span>
        <Link href="http://cse-dev-waffle.bacchus.io/logout">
          <button onClick={handleLogOut}>{t('로그아웃')}</button>
        </Link>
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
      router.push(`/ko${path.slice(3)}?${searchParams}`);
    } else {
      router.push(`/en${path}?${searchParams}`);
    }
  };

  return { isEnglish, changeLanguage };
};
