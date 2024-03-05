import { useCallback, useEffect, useState } from 'react';

const BREAK_POINT = {
  sm: 640 /* mobile min-width: 640px */,
};

type ScreenType = 'mobile' | 'desktop';

export default function useResponsive() {
  const [screenType, setScreenType] = useState<ScreenType>('desktop');

  const handleResize = useCallback(() => {
    if (window.innerWidth < BREAK_POINT.sm && screenType !== 'mobile') {
      setScreenType('mobile');
    } else if (window.innerWidth >= BREAK_POINT.sm && screenType !== 'desktop') {
      setScreenType('desktop');
    }
  }, [screenType]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return { screenType };
}
