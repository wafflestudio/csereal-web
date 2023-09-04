'use client';

import Link from 'next/link';

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
  // TODO
  const lang = 'ENG';

  const handleLogin = () => {
    console.log('로그인 버튼 클릭');
  };
  const handleLogOut = () => {
    console.log('로그아웃 버튼 클릭');
  };
  const handleLangChange = () => {
    // TODO
  };

  return (
    <div className="flex flex-col gap-4 items-end flex-grow">
      <div className="font-yoon text-xs font-normal flex gap-3">
        <Link href="http://cse-dev-waffle.bacchus.io/login">
          <button onClick={handleLogin}>로그인</button>
        </Link>
        <span className="text-neutral-500">|</span>
        {/* <Link href="http://cse-dev-waffle.bacchus.io/logout">
          <button onClick={handleLogOut}>로그아웃</button>
        </Link>
        <span>|</span> */}
        <button onClick={handleLangChange}>{lang}</button>
      </div>
      <HeaderSearchBar />
    </div>
  );
}
