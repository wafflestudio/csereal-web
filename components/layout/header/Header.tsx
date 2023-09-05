'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useNavbarContext } from '@/contexts/NavbarContext';

import { logOut, login } from '@/apis/auth';

import { useLanguage } from '@/hooks/useLanguage';

import HeaderSearchBar from './HeaderSearchBar';

export default function Header() {
  const { navbarState } = useNavbarContext();

  return (
    <header
      className={`
        bg-white fixed top-0 right-0 pt-12 px-[3.75rem] pb-[1.69rem] flex justify-between overflow-scroll no-scrollbar
        ${navbarState.type === 'closed' ? 'left-[6.25rem]' : 'left-[11rem]'}
      `}
    >
      <HeaderTitle />
      <HeaderRight />
    </header>
  );
}

function HeaderTitle() {
  return (
    <div className="font-yoon font-bold text-neutral-700 mr-8 whitespace-nowrap">
      <Link href="/">
        <h2 className="text-xl tracking-[.03438rem] mb-[0.31rem]">서울대학교 컴퓨터공학부</h2>
        <h3 className="text-md tracking-[-0.04375rem] leading-tight">
          Seoul National University
          <br />
          Dept. of Computer Science and Engineering
        </h3>
      </Link>
    </div>
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
