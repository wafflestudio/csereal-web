import { useMediaQuery } from '@mui/material';

const BREAK_POINT = {
  sm: 640 /* mobile min-width: 640px */,
  xl: 1280 /* wide desktop */,
};

export default function useResponsive(): {
  isMobile: boolean;
  isDesktopWide: boolean;
} {
  const isMobile = useMediaQuery(`(min-width: ${BREAK_POINT.sm}px)`);
  const isDesktopWide = useMediaQuery(`(min-width: ${BREAK_POINT.xl}px)`);

  return { isMobile, isDesktopWide };
}
