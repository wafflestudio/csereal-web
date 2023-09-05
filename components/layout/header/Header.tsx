'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useNavbarContext } from '@/contexts/NavbarContext';
import HeaderLogo from '@/public/image/header_logo.svg';

import { logOut, login } from '@/apis/auth';

import { useLanguage } from '@/hooks/useLanguage';

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
  const { isEnglish } = useLanguage();

  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const handleLogin = () => {
    console.log('로그인 버튼 클릭');
  };
  const handleLogOut = () => {
    console.log('로그아웃 버튼 클릭');
  };

  return (
    <div className="flex flex-col justify-between items-end flex-grow">
      <div className="font-yoon text-xs font-normal text-neutral-700 flex gap-[.62rem]">
        <Link href="http://cse-dev-waffle.bacchus.io/api/v1/login">
          <button onClick={handleLogin}>{isEnglish ? 'Login' : '로그인'}</button>
        </Link>
        <span>|</span>
        <Link href="http://cse-dev-waffle.bacchus.io/api/v1/logout">
          <button onClick={handleLogOut}>{isEnglish ? 'Logout' : '로그아웃'}</button>
        </Link>
        <span>|</span>
        <Link href={redirectedPathName(isEnglish ? 'ko' : 'en')}>
          <button>{isEnglish ? '한국어' : 'English'}</button>
        </Link>
      </div>
      <HeaderSearchBar />
    </div>
  );
}
