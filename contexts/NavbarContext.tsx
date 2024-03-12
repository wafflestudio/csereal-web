'use client';

import { usePathname } from 'next/navigation';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import useResponsive from '@/utils/hooks/useResponsive';
import { SegmentNode, main } from '@/utils/segmentNode';

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
  const { screenType } = useResponsive();

  const [navbarState, setNavbarState] = useState<NavbarState>({
    type: node === main ? 'expanded' : 'closed',
  });

  useEffect(() => {
    // 모바일에서는 페이지 이동시 접습니다.
    if (screenType === 'mobile') {
      setNavbarState({ type: 'closed' });
      return;
    }

    // 데스크톱에서는 메인에서 펼쳐져있습니다.
    setNavbarState(node === main ? { type: 'expanded' } : { type: 'closed' });
  }, [node, screenType]);

  return (
    <NavbarContext.Provider value={{ navbarState, setNavbarState }} key={pathName}>
      {children}
    </NavbarContext.Provider>
  );
}

export const useNavbarContext = () => useContext(NavbarContext);
