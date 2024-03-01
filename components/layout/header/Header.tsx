'use-client';

import { useTranslations } from 'next-intl';

import { BASE_URL } from '@/apis';
import { useSessionContext } from '@/contexts/SessionContext';
import { Link } from '@/navigation';
import HeaderLogo from '@/public/image/header/header_logo.svg';
import HeaderSubText from '@/public/image/header/header_sub_text.svg';
import HeaderText from '@/public/image/header/header_text.svg';
import Menu from '@/public/image/header/menu.svg';
import SNULogo from '@/public/image/SNU_Logo.svg';

import useLanguage from '@/hooks/useLanguage';

import HeaderSearchBar from './HeaderSearchBar';

const LOGIN_URL = BASE_URL + '/login';
const LOGOUT_URL = BASE_URL + '/logout';

export default function Header() {
  const goToMainPage = () => (window.location.href = '/');

  return (
    <header
      className={`bg-[#1f2021] h-[68px] px-5 sm:h-auto sm:px-[3.75rem] sm:pt-12 sm:pb-[2.44rem] items-center flex justify-between`}
    >
      <div onClick={goToMainPage} className="cursor-pointer">
        <HeaderLogo className="hidden sm:block" />
        <div className="sm:hidden flex gap-4 items-center">
          <SNULogo className="fill-white" width="34" height="35" />
          <div className="flex flex-col gap-1">
            <HeaderText />
            <HeaderSubText />
          </div>
        </div>
      </div>
      <HeaderRight />
      <Menu className="sm:hidden" />
    </header>
  );
}

function HeaderRight() {
  const { isEnglish, changeLanguage } = useLanguage();
  const { user } = useSessionContext();

  const t = useTranslations('Header');

  const langButtonText = isEnglish ? '한국어' : 'ENG';

  return (
    <div className="hidden sm:flex flex-col justify-between gap-[0.94rem] items-end">
      <div className="font-yoon text-xs font-normal flex items-center gap-3 text-white">
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
          className="hover:text-main-orange text-sm font-normal"
        >
          {t(user ? '로그아웃' : '로그인')}
        </a>

        <Divider />

        <button
          onClick={changeLanguage}
          className="hover:text-main-orange text-sm font-normal tracking-[0.025rem]"
        >
          {langButtonText}
        </button>
      </div>
      <HeaderSearchBar />
    </div>
  );
}

function Divider() {
  return <div className="bg-white w-[0.03125rem] h-3" />;
}
