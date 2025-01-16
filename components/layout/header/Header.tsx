import { Suspense } from 'react';

import { Link } from '@/i18n/routing';
import HeaderLogoSVG from '@/public/image/header/header_logo.svg';
import HeaderSubTextSVG from '@/public/image/header/header_sub_text.svg';
import HeaderTextSVG from '@/public/image/header/header_text.svg';
import SNULogoSVG from '@/public/image/SNU_Logo.svg';

import HeaderRight from './HeaderRight';
import MobileNavButton from './MobileNavButton';

export default function Header() {
  return (
    <header className="flex h-[68px] shrink-0 items-center justify-between bg-[#2D2D30] px-5 sm:h-auto sm:bg-transparent sm:px-[3.75rem] sm:pb-[2.44rem] sm:pt-12">
      <HeaderLeft />

      {/* 에러 없애기 위해 Suspense 추가 */}
      {/* https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
      <Suspense>
        <HeaderRight />
      </Suspense>

      <MobileNavButton />
    </header>
  );
}

function HeaderLeft() {
  return (
    <Link href="/" className="cursor-pointer" aria-label="메인으로 이동">
      {/* mobile */}
      <HeaderLogoSVG className="hidden sm:block" />

      {/* desktop */}
      <div className="flex items-center gap-4 sm:hidden">
        <SNULogoSVG className="fill-white" width="34" height="35" />
        <div className="flex flex-col gap-1">
          <HeaderTextSVG />
          <HeaderSubTextSVG />
        </div>
      </div>
    </Link>
  );
}
