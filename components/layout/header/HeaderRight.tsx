'use client';

import { useTranslations } from 'next-intl';

import LoginVisible from '@/components/common/LoginVisible';
import { useSessionContext } from '@/contexts/SessionContext';
import { Link } from '@/i18n/routing';
import useLanguage from '@/utils/hooks/useLanguage';

import HeaderSearchBar from './HeaderSearchBar';

export default function HeaderRight() {
  const { isEnglish, changeLanguage } = useLanguage();
  const { state, login, logout } = useSessionContext();
  const t = useTranslations('Header');

  const langButtonText = isEnglish ? '한국어' : 'ENG';
  const authText = t(state === 'logout' ? '로그인' : '로그아웃');
  const onClickAuth = state === 'logout' ? login : logout;

  return (
    <div className="hidden flex-col items-end justify-between gap-[0.94rem] sm:flex">
      <div className="flex items-center gap-3 text-sm font-normal text-white">
        <LoginVisible staff>
          <Link href={'/admin'} className="hover:text-main-orange">
            관리자 메뉴 <div className=""></div>
          </Link>
          <Divider />
        </LoginVisible>

        <button onClick={onClickAuth} className="hover:text-main-orange">
          {authText}
        </button>

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
