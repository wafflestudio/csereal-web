'use client';

import { useNavbarContext } from '@/contexts/NavbarContext';
import MenuSVG from '@/public/image/header/menu.svg';

import { about } from '@/utils/segmentNode';

export default function MobileNavButton() {
  const { navbarState, toggle } = useMobileNav();

  return (
    <button onClick={toggle} className="flex items-center justify-center sm:hidden">
      {navbarState.type === 'closed' ? (
        <MenuSVG className="cursor-pointer" />
      ) : (
        <span className="material-symbols-outlined font-light text-white">close</span>
      )}
    </button>
  );
}

const useMobileNav = () => {
  const { navbarState, setNavbarState } = useNavbarContext();

  const toggle = () => {
    // TODO: DOM을 직접 건들이지 않고 스크롤 방지 구현
    const main = document.querySelector('main') as HTMLElement;

    setNavbarState((state) => {
      if (state.type === 'closed') {
        main.scrollTo(0, 0);
        main.style.overflow = 'hidden';
        main.style.height = '100vh';
        return { type: 'hovered', segmentNode: about };
      } else {
        main.style.overflow = '';
        main.style.height = '';
        return { type: 'closed' };
      }
    });
  };

  return { navbarState, toggle };
};
