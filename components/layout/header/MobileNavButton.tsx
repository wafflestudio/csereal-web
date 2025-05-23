'use client';

import { about, main as mainNode, SegmentNode } from '@/constants/segmentNode';
import MenuSVG from '@/public/image/header/menu.svg';
import { useNavbarStore } from '@/stores/NavbarStore';
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
  const navbarState = useNavbarStore((s) => s.navbarState);
  const setNavbarState = useNavbarStore((s) => s.setNavbarState);
  const node = useCurrentSegmentNode();

  const toggle = () => {
    // 현재 페이지의 상세 네비를 펼침
    let nodeToOpen: SegmentNode | null = node;
    while (nodeToOpen && nodeToOpen.parent !== mainNode) nodeToOpen = nodeToOpen?.parent;

    // TODO: DOM을 직접 건들이지 않고 스크롤 방지 구현
    const main = document.querySelector('main') as HTMLElement;

    if (navbarState.type === 'closed') {
      main.scrollTo(0, 0);
      main.style.overflow = 'hidden';
      main.style.height = '100%';

      setNavbarState({ type: 'hovered', segmentNode: nodeToOpen || about });
    } else {
      main.style.overflow = '';
      main.style.height = '';

      setNavbarState({ type: 'closed' });
    }
  };

  return { navbarState, toggle };
};
