import { useMediaQuery } from '@mui/material';

// px
const BREAK_POINT = {
  sm: 640 /* mobile */,
  md: 768 /* tablet */,
  lg: 1024 /* desktop */,
  xl: 1280 /* wide desktop */,
};

/**
 * mobile: 0px ~ 639px
 * tablet: 640px ~ 1023px
 * desktop: 1024px ~ 1279px
 * desktop wide: 1280px ~ inf.
 * @returns boolean value variables [is{status}]
 */
export default function useResponsive() {
  const isMobile = useMediaQuery(`(max-width: ${BREAK_POINT.sm - 1}px)`);
  const isTablet = useMediaQuery(
    `(min-width: ${BREAK_POINT.md}px) and (max-width:${BREAK_POINT.lg - 1}px)`,
  );
  const isDesktop = useMediaQuery(
    `(min-width: ${BREAK_POINT.lg}px) and (max-width:${BREAK_POINT.xl - 1}px)`,
  );
  const isDesktopWide = useMediaQuery(`(min-width: ${BREAK_POINT.xl}px)`);

  return { isMobile, isTablet, isDesktop, isDesktopWide };
}
