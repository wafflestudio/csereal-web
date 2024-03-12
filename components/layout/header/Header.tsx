import { Suspense } from 'react';

import { Link } from '@/navigation';
import HeaderLogoSVG from '@/public/image/header/header_logo.svg';
import HeaderSubTextSVG from '@/public/image/header/header_sub_text.svg';
import HeaderTextSVG from '@/public/image/header/header_text.svg';
import SNULogoSVG from '@/public/image/SNU_Logo.svg';

import HeaderRight from './HeaderRight';
import MobileNavButton from './MobileNavButton';

export const HEADER_HEIGHT_PX = 68;

export default function Header() {
  return (
    <header
      className={`flex items-center justify-between bg-[#2d2d30] px-5 sm:h-auto sm:bg-transparent sm:px-[3.75rem] sm:pb-[2.44rem] sm:pt-12`}
      style={{ height: HEADER_HEIGHT_PX }}
    >
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
    <Link href="/" className="cursor-pointer">
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
