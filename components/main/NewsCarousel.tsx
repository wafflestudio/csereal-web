import { MainNews } from '@/types/main';

import { CARD_GAP_REM, WIDTH_REM } from './constants';
import NewsCard from './NewsCard';
import useCarousel from './useCarousel';

export default function NewsCarousel({ news }: { news: MainNews[] }) {
  const { offsetREM, pageCnt, setPage, page, isScroll, startScroll, stopScroll } =
    useCarousel(news);

  return (
    <div className="flex flex-col items-center pb-10">
      <div
        className="mx-auto overflow-x-hidden pb-10 pt-[5rem]"
        style={{ width: `${WIDTH_REM - CARD_GAP_REM}rem` }}
      >
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${offsetREM}rem)`,
            gap: `${CARD_GAP_REM}rem`,
          }}
        >
          {news.map((news, idx) => (
            <NewsCard key={news.id} news={news} shadow={idx % 4 !== 0} />
          ))}
        </div>
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
    <div className="relative flex gap-[0.63rem]">
      {[...Array(pageCnt).keys()].map((idx) => (
        <button key={idx} onClick={() => setPage(idx)}>
          <CapsuleIcon current={page === idx} />
        </button>
      ))}
      <button onClick={isScroll ? stopScroll : startScroll}>
        {isScroll ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
};

const CapsuleIcon = ({ current }: { current: boolean }) => (
  <div
    className="h-2 rounded-full transition-all duration-700"
    style={{
      width: current ? '2.5rem' : '0.5rem',
      backgroundColor: current ? '#E65615' : '#D4D4D4',
    }}
  />
);

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path fill="#D4D4D4" d="M14 18V6h2.5v12H14Zm-6.5 0V6H10v12H7.5Z" />
    </g>
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#a)">
      <path fill="#D4D4D4" d="M7 19.12V4l10.8 7.56L7 19.12Z" />
    </g>
  </svg>
);
