'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import { SegmentNode, main } from '@/utils/segmentNode';

export type NavbarState =
  | { type: 'closed' }
  | { type: 'expanded' }
  | { type: 'hovered'; segmentNode: SegmentNode };

type NavbarContextContent = {
  navbarState: NavbarState;
  setNavbarState: (state: NavbarState) => void;
};

const NavbarContext = createContext<NavbarContextContent>({
  navbarState: { type: 'closed' },
  setNavbarState: () => {},
});

export function NavbarContextProvider({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const node = useCurrentSegmentNode();

  const [navbarState, setNavbarState] = useState<NavbarState>({
    type: node === main ? 'expanded' : 'closed',
  });

  useEffect(() => {
    // 메인 화면에서는 펼쳐져 있습니다.
    // 페이지 이동시 접습니다.
    setNavbarState({ type: node === main ? 'expanded' : 'closed' });
  }, [node]);

  return (
    <NavbarContext.Provider value={{ navbarState, setNavbarState }} key={pathName}>
      {children}
    </NavbarContext.Provider>
  );
}

export const useNavbarContext = () => useContext(NavbarContext);
