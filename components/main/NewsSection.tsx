'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

import SmallRightArrow from '@/public/image/main/small_right_arrow.svg';

import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

export default function NewsSection({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-neutral-100">
      <div className="absolute left-[3.81rem] top-[5rem] z-10 flex flex-col gap-2">
        <h3 className="text-[1.75rem] font-medium text-neutral-950">새 소식</h3>
        <Link
          className="flex items-center gap-1 text-base font-normal text-[#E65615]"
          href={getPath(news)}
        >
          더보기 <SmallRightArrow />
        </Link>
      </div>

      <div className="ml-[12.56rem] flex gap-8 overflow-x-scroll pb-[5.5rem] pr-[7.5rem] pt-[5rem]">
        {children}
      </div>
    </div>
  );
}
