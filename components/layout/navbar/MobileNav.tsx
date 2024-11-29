'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { useNavbarContext } from '@/contexts/NavbarContext';
import { useSessionContext } from '@/contexts/SessionContext';
import { useRouter } from '@/i18n/routing';
import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import useLanguage from '@/utils/hooks/useLanguage';
import { isAncestorNode } from '@/utils/page';
import { main, SegmentNode } from '@/utils/segmentNode';

import MobileNavDetail from './MobileNavDetail';

const HEADER_HEIGHT_PX = 68;

// TODO: 모바일에서 MajorCategoryPageLayout 처리
export default function MobileNav() {
  const { navbarState } = useNavbarContext();
  if (navbarState.type !== 'hovered') return <></>;

  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-50 flex sm:hidden"
      style={{ top: HEADER_HEIGHT_PX }}
    >
      <MobileNavList />
      <MobileNavDetail />
    </div>
  );
}

function MobileNavList() {
  const { navbarState, setNavbarState } = useNavbarContext();
  const [search, setSearch] = useState(false);

  const cur = useCurrentSegmentNode();
  const t = useTranslations('Nav');

  const shouldHighlight = (child: SegmentNode) => {
    return navbarState.type === 'hovered'
      ? child === navbarState.segmentNode
      : isAncestorNode(child, cur);
  };

  return (
    <nav className="flex min-w-[100px] grow-[6.25] basis-0 flex-col justify-between bg-[#323235] pt-10">
      <ul className="flex flex-col gap-9 text-center">
        {main.children?.map((child, i) => (
          <li
            key={i}
            className={`text-sm font-medium ${
              shouldHighlight(child) ? 'text-white' : 'text-neutral-500'
            } cursor-pointer whitespace-nowrap leading-5`}
            onClick={() => setNavbarState({ type: 'hovered', segmentNode: child })}
          >
            {t(child.name)}
          </li>
        ))}
      </ul>

      <div className="mb-[40px] flex flex-col items-center text-sm font-medium text-neutral-500">
        <button onClick={() => setSearch(true)}>
          <SearchIcon />
        </button>
        <AuthButton />
        <LangButton />
      </div>
      {search && <SearchPage />}
    </nav>
  );
}

const SearchPage = () => {
  const router = useRouter();
  const [text, setText] = useState('');

  const search = () => router.push(`/search?keyword=${text}`);

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-50 bg-[#1F2021]">
      <div className="mx-[1.94rem] mt-9 flex items-center border-b border-neutral-400">
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={(e) => e.key === 'Enter' && search()}
          className="h-8 w-full bg-transparent text-md text-white outline-none placeholder:text-neutral-500"
          placeholder="검색어를 입력해주세요"
        />
        <button onClick={search}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

const AuthButton = () => {
  const { state, login, logout } = useSessionContext();

  return (
    <button onClick={state === 'logout' ? login : logout} className="mt-6">
      {state === 'logout' ? 'LOGIN' : 'LOGOUT'}
    </button>
  );
};

const LangButton = () => {
  const { isEnglish, changeLanguage } = useLanguage();
  const langButtonText = isEnglish ? '한국어' : 'ENG';

  return (
    <button onClick={changeLanguage} className="mt-[0.62rem]">
      {langButtonText}
    </button>
  );
};

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={19} height={18} fill="none">
    <path
      fill="#E5E5E5"
      d="M7.588 11.831c-1.353 0-2.497-.468-3.433-1.406-.937-.937-1.405-2.069-1.405-3.394 0-1.325.469-2.456 1.406-3.393C5.094 2.7 6.228 2.23 7.56 2.23c1.332 0 2.463.469 3.394 1.407.931.937 1.397 2.07 1.397 3.396a4.669 4.669 0 0 1-1.05 2.96l4.537 4.5a.539.539 0 0 1 .17.408.566.566 0 0 1-.17.417.566.566 0 0 1-.416.168.539.539 0 0 1-.409-.168L10.494 10.8a4.135 4.135 0 0 1-1.312.76 4.64 4.64 0 0 1-1.595.271Zm-.02-1.125c1.016 0 1.88-.36 2.59-1.078a3.56 3.56 0 0 0 1.067-2.597 3.56 3.56 0 0 0-1.066-2.597c-.711-.718-1.575-1.078-2.59-1.078-1.026 0-1.898.36-2.617 1.078a3.541 3.541 0 0 0-1.077 2.597c0 1.013.36 1.878 1.077 2.597.719.719 1.59 1.078 2.617 1.078Z"
    />
  </svg>
);
