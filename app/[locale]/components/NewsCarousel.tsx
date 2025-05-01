import { ButtonHTMLAttributes, useEffect } from 'react';

import { MainNews } from '@/apis/types/main';
import { animateScrollLeft } from '@/app/[locale]/components/animateScrollTo';
import { CARD_GAP_REM, CARD_GAP_TAILWIND } from '@/app/[locale]/components/constants';
import NewsCard from '@/app/[locale]/components/NewsCard';
import useCarousel from '@/app/[locale]/components/useCarousel';
import { useCarouselLayout } from '@/app/[locale]/components/useCarouselLayout';
import useStyle from '@/utils/hooks/useStyle';

export default function NewsCarousel({ news }: { news: MainNews[] }) {
  const { offsetREM, pageCnt, setPage, page, isScroll, startScroll, stopScroll } =
    useCarousel(news);
  const { widthREM } = useCarouselLayout();
  const { ref: containerRef } = useStyle<HTMLDivElement>(
    (style) => (style.width = `${widthREM - CARD_GAP_REM}rem`),
    [widthREM],
  );

  useEffect(() => {
    if (containerRef.current === null) return;

    return animateScrollLeft(containerRef.current, offsetREM * 16);
  }, [containerRef, offsetREM]);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`no-scrollbar mx-auto flex overflow-x-hidden pb-10 ${CARD_GAP_TAILWIND}`}
        ref={containerRef}
      >
        {news.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
      <PageIndicator
        page={page}
        pageCnt={pageCnt}
        setPage={setPage}
        isScroll={isScroll}
        startScroll={startScroll}
        stopScroll={stopScroll}
      />
    </div>
  );
}

const PageIndicator = ({
  page,
  pageCnt,
  setPage,
  isScroll,
  startScroll,
  stopScroll,
}: {
  page: number;
  pageCnt: number;
  setPage: (page: number) => void;
  isScroll: boolean;
  startScroll: () => void;
  stopScroll: () => void;
}) => {
  return (
    <div className="relative flex">
      {[...Array(pageCnt).keys()].map((idx) => (
        <PageIndicatorDot
          key={idx}
          aria-label={`${idx + 1}번째 페이지로 이동`}
          isHighlight={page === idx}
          onClick={() => setPage(idx)}
        />
      ))}
      <button
        onClick={isScroll ? stopScroll : startScroll}
        aria-label={isScroll ? '자동 스크롤 중지' : '자동 스크롤 시작'}
      >
        {isScroll ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
};

const PageIndicatorDot = ({
  isHighlight,
  ...props
}: {
  isHighlight: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="flex h-[1.5rem] items-center justify-center duration-700 "
      {...props}
      {...useStyle((style) => (style.width = isHighlight ? '3.5rem' : '1.5rem'), [isHighlight])}
    >
      <div
        className="mx-2 h-2 w-full rounded-full"
        {...useStyle(
          (style) => (style.backgroundColor = isHighlight ? '#E65615' : '#D4D4D4'),
          [isHighlight],
        )}
      />
    </button>
  );
};

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <mask id="a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path fill="#D4D4D4" d="M14 18V6h2.5v12H14Zm-6.5 0V6H10v12H7.5Z" />
    </g>
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <mask id="a" width={24} height={24} x={0} y={0} maskUnits="userSpaceOnUse">
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path fill="#D4D4D4" d="M7 19.12V4l10.8 7.56L7 19.12Z" />
    </g>
  </svg>
);
