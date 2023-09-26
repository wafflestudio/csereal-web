'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

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
  const [navbarState, setState] = useState<NavbarState>(getNavState() || { type: 'closed' });
  const setNavbarState = (state: NavbarState) => {
    if (state.type === 'closed' || state.type === 'expanded') saveNavState(state);
    setState(state);
  };

  return (
    <NavbarContext.Provider value={{ navbarState, setNavbarState }}>
      {children}
    </NavbarContext.Provider>
  );
}

export const useNavbarContext = () => useContext(NavbarContext);

const localStorageKey = 'NAVBARSTATE';

const saveNavState = (state: NavbarState) => {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
};

const getNavState = (): NavbarState | null => {
  const item = localStorage.getItem(localStorageKey);
  if (item) {
    return JSON.parse(item);
  } else {
    return null;
  }
};
