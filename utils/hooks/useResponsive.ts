import { useMediaQuery } from '@mui/material';

const BREAK_POINT = {
  sm: 640 /* mobile min-width: 640px */,
};

type ScreenType = 'mobile' | 'desktop';

export default function useResponsive(): { screenType: ScreenType } {
  const matches = useMediaQuery(`(min-width: ${BREAK_POINT.sm}px)`);
  return { screenType: matches ? 'desktop' : 'mobile' };
}
