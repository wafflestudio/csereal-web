'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { BASE_URL } from '@/apis/common/client';

import StaffVisible from '@/components/common/auth/StaffVisible';

import { isLogined } from '@/utils/auth';
import useLanguage from '@/utils/hooks/useLanguage';

import HeaderSearchBar from './HeaderSearchBar';

const LOGIN_URL = BASE_URL + '/login';
const LOGOUT_URL = BASE_URL + '/logout';

export default function HeaderRight() {
  const { isEnglish, changeLanguage } = useLanguage();

  const t = useTranslations('Header');

  const langButtonText = isEnglish ? '한국어' : 'ENG';
  const isLogin = isLogined();

  return (
    <div className="hidden flex-col items-end justify-between gap-[0.94rem] sm:flex">
      <div className="flex items-center gap-3 text-xs font-normal text-white">
        <StaffVisible>
          <Link href={'/admin'} className="hover:text-main-orange">
            관리자 메뉴 <div className=""></div>
          </Link>
          <Divider />
        </StaffVisible>

        <Link
          href={isLogin ? LOGOUT_URL : LOGIN_URL}
          className="text-sm font-normal hover:text-main-orange"
          // 로그인/로그아웃을 prefetch하면 안됩니다.
          prefetch={false}
        >
          {t(isLogin ? '로그아웃' : '로그인')}
        </Link>

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
