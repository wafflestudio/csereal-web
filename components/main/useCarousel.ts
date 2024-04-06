import { useState, useCallback, useEffect } from 'react';

import { MainNews } from '@/types/main';

import { CARD_CNT, AUTO_SCROLL_MS, WIDTH_REM } from './constants';

export default function useCarousel(news: MainNews[]) {
  const [page, _setPage] = useState(1);
  const [intervalID, setIntervalID] = useState<NodeJS.Timer | null>(null);

  const pageCnt = Math.ceil(news.length / CARD_CNT);
  const offsetREM = WIDTH_REM * page;

  // TODO: 타입 이게 맞나?

  const isScroll = intervalID !== null;

  const startScroll = useCallback(() => {
    setIntervalID(
      setInterval(() => {
        _setPage((x) => (x + 1) % pageCnt);
      }, AUTO_SCROLL_MS),
    );
  }, [pageCnt]);

  const stopScroll = useCallback(() => {
    setIntervalID((x) => {
      if (x) clearInterval(x);
      return null;
    });
  }, []);

  const setPage = useCallback(
    (page: number) => {
      stopScroll();
      _setPage(page);
      startScroll();
    },
    [startScroll, stopScroll],
  );

  useEffect(() => {
    startScroll();
    return stopScroll;
  }, [pageCnt, startScroll, stopScroll]);

  return { offsetREM, page, setPage, pageCnt, isScroll, startScroll, stopScroll };
}
