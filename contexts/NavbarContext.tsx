'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { usePathname } from '@/navigation';
import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import useResponsive from '@/utils/hooks/useResponsive';
import { SegmentNode } from '@/utils/segmentNode';

export type NavbarState =
  | { type: 'closed' }
  | { type: 'expanded' }
  | { type: 'hovered'; segmentNode: SegmentNode };

type NavbarContextContent = {
  navbarState: NavbarState;
  setNavbarState: Dispatch<SetStateAction<NavbarState>>;
};

const NavbarContext = createContext<NavbarContextContent>({
  navbarState: { type: 'closed' },
  setNavbarState: () => {},
});

export function NavbarContextProvider({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const node = useCurrentSegmentNode();
  const { isMobile } = useResponsive();

  const isMain = pathName === '/' || pathName === '/en';

  const [navbarState, setNavbarState] = useState<NavbarState>({
    type: isMain ? 'expanded' : 'closed',
  });

  useEffect(() => {
    // 모바일에서는 페이지 이동시 항상 접습니다.
    if (isMobile) {
      setNavbarState({ type: 'closed' });
      return;
    }

    // 데스크톱에서는 메인에서 펼쳐져있습니다.
    setNavbarState(isMain ? { type: 'expanded' } : { type: 'closed' });
  }, [isMain, isMobile, node]); // 페이지 이동시 접기 위해 node를 deps에 추가합니다.

  return (
    <NavbarContext.Provider value={{ navbarState, setNavbarState }} key={pathName}>
      {children}
    </NavbarContext.Provider>
  );
}

export const useNavbarContext = () => useContext(NavbarContext);
