'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import { BASE_URL } from '@/apis';
import { useSessionContext } from '@/contexts/SessionContext';
import HeaderLogo from '@/public/image/header_logo.svg';

import HeaderSearchBar from './HeaderSearchBar';

const LOGIN_URL = BASE_URL + '/login';
const LOGOUT_URL = BASE_URL + '/logout';

export default function Header() {
  const refreshPage = () => {
    window.location.href = '/';
  };

  return (
    <header
      className={`
         sticky top-0 bg-white h-[9.25rem] px-[3.75rem] pt-[51px] pb-[1.69rem] flex justify-between gap-4 no-scrollbar z-10
      `}
    >
      <div onClick={refreshPage} className="cursor-pointer">
        <HeaderLogo />
      </div>
      <HeaderRight />
    </header>
  );
}

function HeaderRight() {
  const { isEnglish, changeLanguage } = useLanguage();
  const { user } = useSessionContext();

  const t = useTranslations('Header');

  const langButtonText = isEnglish ? '한국어' : 'ENG';

  return (
    <div className="flex flex-col gap-4 items-end flex-grow">
      <div className="font-yoon text-xs font-normal flex gap-3">
        {user ? (
          <>
            {user.isStaff && (
              <>
                <Link href={'/admin'} className="hover:text-main-orange">
                  관리자 메뉴 <div className=""></div>
                </Link>
                <span>|</span>
              </>
            )}
            <a href={LOGOUT_URL} className="hover:text-main-orange">
              {t('로그아웃')}
            </a>
          </>
        ) : (
          <a href={LOGIN_URL} className="hover:text-main-orange">
            {t('로그인')}
          </a>
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
