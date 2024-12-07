import { useMediaQuery } from '@mui/material';

import { CARD_GAP_REM, CARD_WIDTH_REM } from './constants';

export const useCarouselLayout = () => {
  const wide = useMediaQuery(`(max-width: 1380px)`);

  const cardCnt = wide ? 3 : 4;
  const widthREM = (CARD_WIDTH_REM + CARD_GAP_REM) * cardCnt - 0.05;

  return { cardCnt, widthREM };
};
