'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { useSessionContext } from '@/contexts/SessionContext';

import LoginVisible from '@/components/common/LoginVisible';

import useLanguage from '@/utils/hooks/useLanguage';

import HeaderSearchBar from './HeaderSearchBar';

export default function HeaderRight() {
  const { isEnglish, changeLanguage } = useLanguage();
  const langButtonText = isEnglish ? '한국어' : 'ENG';

  return (
    <div className="hidden flex-col items-end justify-between gap-[0.94rem] sm:flex">
      <div className="flex items-center gap-3 text-sm font-normal text-white">
        <LoginVisible staff>
          <Link href={'/admin'} className="hover:text-main-orange">
            관리자 메뉴 <div className=""></div>
          </Link>
          <Divider />
        </LoginVisible>

        <AuthButton />

        <Divider />

        <button onClick={changeLanguage} className="tracking-[0.025rem] hover:text-main-orange">
          {langButtonText}
        </button>
      </div>
      <HeaderSearchBar />
    </div>
  );
}

const Divider = () => {
  return <div className="h-3 w-[0.03125rem] bg-white" />;
};

const AuthButton = () => {
  const { state, login, logout } = useSessionContext();
  const t = useTranslations('Header');

  return (
    <button onClick={state === 'logout' ? login : logout} className="hover:text-main-orange">
      {t(state === 'logout' ? '로그인' : '로그아웃') + '(test)'}
    </button>
  );
};
