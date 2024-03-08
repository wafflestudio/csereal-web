'use client';

import { useTranslations } from 'next-intl';
import { useReducer } from 'react';

import { BASE_URL } from '@/apis';
import { useSessionContext } from '@/contexts/SessionContext';
import { Link } from '@/navigation';
import HeaderLogo from '@/public/image/header/header_logo.svg';
import HeaderSubText from '@/public/image/header/header_sub_text.svg';
import HeaderText from '@/public/image/header/header_text.svg';
import Menu from '@/public/image/header/menu.svg';
import SNULogo from '@/public/image/SNU_Logo.svg';

import useLanguage from '@/utils/hooks/useLanguage';

import HeaderSearchBar from './HeaderSearchBar';

const LOGIN_URL = BASE_URL + '/login';
const LOGOUT_URL = BASE_URL + '/logout';

export default function Header() {
  const goToMainPage = () => (window.location.href = '/');
  const [isNavOpen, toggleNav] = useReducer((x) => !x, false);

  return (
    <header
      className={`flex h-[68px] items-center justify-between bg-[#2d2d30] px-5 sm:h-auto sm:bg-transparent sm:px-[3.75rem] sm:pb-[2.44rem] sm:pt-12`}
    >
      <div onClick={goToMainPage} className="cursor-pointer">
        <HeaderLogo className="hidden sm:block" />
        <div className="flex items-center gap-4 sm:hidden">
          <SNULogo className="fill-white" width="34" height="35" />
          <div className="flex flex-col gap-1">
            <HeaderText />
            <HeaderSubText />
          </div>
        </div>
      </div>
      <HeaderRight />
      <button onClick={toggleNav} className="flex items-center justify-center sm:hidden">
        {isNavOpen ? (
          <span className="material-symbols-outlined font-light text-white">close</span>
        ) : (
          <Menu className="cursor-pointer" />
        )}
      </button>
    </header>
  );
}

function HeaderRight() {
  const { isEnglish, changeLanguage } = useLanguage();
  const { user } = useSessionContext();

  const t = useTranslations('Header');

  const langButtonText = isEnglish ? '한국어' : 'ENG';

  return (
    <div className="hidden flex-col items-end justify-between gap-[0.94rem] sm:flex">
      <div className="flex items-center gap-3 text-xs font-normal text-white">
        {user?.isStaff && (
          <>
            <Link href={'/admin'} className="hover:text-main-orange">
              관리자 메뉴 <div className=""></div>
            </Link>
            <Divider />
          </>
        )}

        {/* prefetch를 막기 위해 Link가 아닌 anchor를 사용합니다.  */}
        <a
          href={user ? LOGOUT_URL : LOGIN_URL}
          className="text-sm font-normal hover:text-main-orange"
        >
          {t(user ? '로그아웃' : '로그인')}
        </a>

        <Divider />

        <button
          onClick={changeLanguage}
          className="text-sm font-normal tracking-[0.025rem] hover:text-main-orange"
        >
          {langButtonText}
        </button>
      </div>
      <HeaderSearchBar />
    </div>
  );
}

function Divider() {
  return <div className="h-3 w-[0.03125rem] bg-white" />;
}
