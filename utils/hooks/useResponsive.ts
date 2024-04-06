import { useMediaQuery } from '@mui/material';

const BREAK_POINT = {
  sm: 640 /* mobile min-width: 640px */,
  xl: 1280,
};

type ScreenType = 'mobile' | 'desktop';

export default function useResponsive(): { screenType: ScreenType; isDesktopWide: boolean } {
  const matches = useMediaQuery(`(min-width: ${BREAK_POINT.sm}px)`);
  const isDesktopWide = useMediaQuery(`(min-width: ${BREAK_POINT.xl}px)`);

  return { screenType: matches ? 'desktop' : 'mobile', isDesktopWide };
}
