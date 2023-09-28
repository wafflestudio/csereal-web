'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import BetaBannerNode from '@/public/image/beta_banner_node.png';

export default function BetaBanner() {
  const [hidden, setHidden] = useState(false);
  const pathName = usePathname();

  if (hidden || pathName !== '/') return <></>;

  return (
    <div className="bg-[#c02800] h-[3.75rem] flex shrink-0 items-center shadow-[0px_2px_4px_0px_rgba(0,0,0,0.20)] justify-between">
      <div>
        <div className="pl-[13.5rem] flex items-center gap-[.19rem] relative">
          <div className="rounded-full border border-neutral-900 w-[.625rem] h-[.625rem] mr-[.63rem]" />
          <p className="text-neutral-900 font-noto text-md font-medium">
            컴퓨터공학부 홈페이지 리뉴얼 베타 테스트
          </p>
          <div className="flex items-end translate-x-[30px] translate-y-[12px] gap-[.63rem]">
            <Image src={BetaBannerNode} className="w-[16.875rem] h-[1.625rem]" alt="" />
            <a
              className="text-sm text-neutral-900 flex items-center translate-y-1"
              href="https://forms.gle/wiLUvBXWs4Ytw2jn7"
            >
              구글 폼 바로가기
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </a>
          </div>
        </div>
        <p className="ml-[15rem] text-[rgba(255,255,255,0.6)] font-noto text-[.6875rem]">
          버그 제보 및 각종 피드백은 구글폼에서 가능합니다. 많은 참여 부탁드립니다!
        </p>
        <div />
      </div>
      <button onClick={() => setHidden(true)} className="mr-[3.75rem]">
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
}
