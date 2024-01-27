'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, createContext, useContext, useState } from 'react';

import { SegmentNode } from '@/types/page';

export type NavbarState =
  | {
      // 접힌 상태
      type: 'closed';
    }
  | {
      // 펼쳐진 상태
      type: 'expanded';
    }
  | {
      // 세부 페이지 보이는 상태
      type: 'hovered';
      segmentNode: SegmentNode;
    };

interface NavbarContextContent {
  navbarState: NavbarState;
  setNavbarState: (state: NavbarState) => void;
}

const NavbarContext = createContext<NavbarContextContent>({
  navbarState: { type: 'closed' },
  setNavbarState: () => {},
});

export function NavbarContextProvider({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const [navbarState, setNavbarState] = useState<NavbarState>({ type: 'closed' });

  return (
    <NavbarContext.Provider value={{ navbarState, setNavbarState }} key={pathName}>
      {children}
    </NavbarContext.Provider>
  );
}

export const useNavbarContext = () => useContext(NavbarContext);
