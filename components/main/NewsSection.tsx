'use client';

import Link from 'next/link';

import SmallRightArrow from '@/public/image/main/small_right_arrow.svg';

import { MainNews } from '@/types/main';

import useResponsive from '@/utils/hooks/useResponsive';
import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

import NewsCarousel from './NewsCarousel';
import NewsCarouselMobile from './NewsCarouselMobile';

export default function NewsSection({ mainNews }: { mainNews: MainNews[] }) {
  const { isMobile } = useResponsive();

  return (
    <div className="relative flex flex-col gap-[1.625rem] overflow-hidden bg-neutral-100 pb-12 pl-5 pt-8 sm:flex-row sm:gap-[60px] sm:py-10 sm:pl-[60px] sm:pr-[150px]">
      <Header />
      {isMobile ? <NewsCarouselMobile news={mainNews} /> : <NewsCarousel news={mainNews} />}
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="whitespace-nowrap text-[1.25rem] font-semibold text-neutral-950 sm:text-[1.75rem] sm:font-medium">
        새 소식
      </h3>
      <Link
        className="hidden items-center gap-1 text-base font-normal text-[#E65615] sm:flex"
        href={getPath(news)}
      >
        더보기 <SmallRightArrow />
      </Link>
    </div>
  );
}
