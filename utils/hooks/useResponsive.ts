import { useEffect, useState } from 'react';

const BREAK_POINT = {
  sm: 640 /* mobile min-width: 640px */,
};

type ScreenType = 'mobile' | 'desktop';

const getScreenType = (): ScreenType => (window.innerWidth < BREAK_POINT.sm ? 'mobile' : 'desktop');

export default function useResponsive() {
  const [screenType, setScreenType] = useState<ScreenType>(getScreenType());

  useEffect(() => {
    const handleResize = () => setScreenType(getScreenType());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { screenType };
}
