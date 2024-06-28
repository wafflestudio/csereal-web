'use client';

import { useNavbarContext } from '@/contexts/NavbarContext';
import MenuSVG from '@/public/image/header/menu.svg';

import { NavTreeNode, about, main as mainNode } from '@/constants/navTreeNode';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';

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
  const node = useCurrentSegmentNode();

  const toggle = () => {
    // 현재 페이지의 상세 네비를 펼침
    let nodeToOpen: NavTreeNode | null = node;
    while (nodeToOpen && nodeToOpen.parent !== mainNode) nodeToOpen = nodeToOpen?.parent;

    // TODO: DOM을 직접 건들이지 않고 스크롤 방지 구현
    const main = document.querySelector('main') as HTMLElement;

    setNavbarState((state) => {
      if (state.type === 'closed') {
        main.scrollTo(0, 0);
        main.style.overflow = 'hidden';
        main.style.height = '100%';
        return { type: 'hovered', segmentNode: nodeToOpen || about };
      } else {
        main.style.overflow = '';
        main.style.height = '';
        return { type: 'closed' };
      }
    });
  };

  return { navbarState, toggle };
};
