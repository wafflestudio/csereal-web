import { useCallback, useEffect, useState } from 'react';

const BREAK_POINT = {
  sm: 640 /* mobile min-width: 640px */,
};

type ScreenType = 'mobile' | 'desktop';

export default function useResponsive() {
  const [screenType, setScreenType] = useState<ScreenType>('desktop');

  const handleResize = useCallback(() => {
    console.log('Adfasdf');
    if (window.innerWidth < BREAK_POINT.sm) {
      setScreenType('mobile');
    } else if (window.innerWidth >= BREAK_POINT.sm) {
      setScreenType('desktop');
    }
  }, []);

  useEffect(() => {
    handleResize(); // resize 이벤트가 발생하지 않는 맨 처음 현재 환경을 파악하기 위해 실행
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return { screenType };
}
