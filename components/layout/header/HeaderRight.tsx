'use client';

import { useTranslations } from 'next-intl';

import LoginVisible from '@/components/common/LoginVisible';
import { isProd } from '@/constants/env';
import { Link } from '@/i18n/routing';
import { useSessionStore } from '@/stores/SessionStore';
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

        {isProd ? <ProdLogin /> : <DevLogin />}

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

const ProdLogin = () => {
  const state = useSessionStore((s) => s.state);
  const login = useSessionStore((s) => s.login);
  const logout = useSessionStore((s) => s.logout);
  const t = useTranslations('Header');

  const authText = t(state === 'logout' ? '로그인' : '로그아웃');
  const onClickAuth = state === 'logout' ? login : logout;

  return (
    <button onClick={onClickAuth} className="hover:text-main-orange">
      {authText}
    </button>
  );
};

const DevLogin = () => {
  const state = useSessionStore((s) => s.state);
  const mockLogin = useSessionStore((s) => s.mockLogin);
  const mockLogout = useSessionStore((s) => s.mockLogout);

  const isLogout = state === 'logout';

  if (isLogout)
    return (
      <>
        <button onClick={() => mockLogin('ROLE_STAFF')} className="hover:text-main-orange">
          STAFF
        </button>
        <Divider />
        <button onClick={() => mockLogin('ROLE_RESERVATION')} className="hover:text-main-orange">
          RESERV
        </button>
        <Divider />
        <button onClick={() => mockLogin('ROLE_COUNCIL')} className="hover:text-main-orange">
          COUNCIL
        </button>
      </>
    );
  else {
    return (
      <button onClick={mockLogout} className="hover:text-main-orange">
        로그아웃
      </button>
    );
  }
};
