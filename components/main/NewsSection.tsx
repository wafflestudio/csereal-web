'use client';

import Link from 'next/link';

import SmallRightArrow from '@/public/image/main/small_right_arrow.svg';

import { MainNews } from '@/types/main';

import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

import NewsCarousel from './NewsCarousel';

export default function NewsSection({ mainNews }: { mainNews: MainNews[] }) {
  return (
    <div className="relative bg-neutral-100 sm:min-w-[1336px]">
      <div className="absolute left-[3.81rem] top-[5rem] z-10 flex flex-col gap-2">
        <h3 className="text-[1.75rem] font-medium text-neutral-950">새 소식</h3>
        <Link
          className="flex items-center gap-1 text-base font-normal text-[#E65615]"
          href={getPath(news)}
        >
          더보기 <SmallRightArrow />
        </Link>
      </div>

      <NewsCarousel news={mainNews} />
    </div>
  );
}
