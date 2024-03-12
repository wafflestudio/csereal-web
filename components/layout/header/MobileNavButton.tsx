'use client';

import { useTranslations } from 'next-intl';

import { useNavbarContext } from '@/contexts/NavbarContext';
import MenuSVG from '@/public/image/header/menu.svg';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import { isAncestorNode } from '@/utils/page';
import { SegmentNode, about, main } from '@/utils/segmentNode';

import { HEADER_HEIGHT_PX } from './Header';
import NavTreeRow from '../navbar/NavtreeRow';

export default function MobileNavButton() {
  const { navbarState, toggle } = useMobileNav();

  return (
    <>
      <button onClick={toggle} className="flex items-center justify-center sm:hidden">
        {navbarState.type === 'closed' ? (
          <MenuSVG className="cursor-pointer" />
        ) : (
          <span className="material-symbols-outlined font-light text-white">close</span>
        )}
      </button>
      {navbarState.type !== 'closed' && <MobileNav />}
    </>
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

const MobileNav = () => {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 z-50 flex h-[100vh] sm:hidden`}
      style={{ top: HEADER_HEIGHT_PX }}
    >
      <MobileNavList />
      <div className="relative grow">
        <MobileNavDetail />
      </div>
    </div>
  );
};

function MobileNavList() {
  const { navbarState, setNavbarState } = useNavbarContext();

  const cur = useCurrentSegmentNode();
  const t = useTranslations('Nav');

  const shouldHighlight = (child: SegmentNode) => {
    return navbarState.type === 'hovered'
      ? child === navbarState.segmentNode
      : isAncestorNode(child, cur);
  };

  return (
    <nav className="bg-[#323235] px-12 pt-10">
      <ul className="flex flex-col gap-9 text-center">
        {main.children?.map((child, i) => (
          <li
            key={i}
            className={`text-[0.9375rem] font-medium ${
              shouldHighlight(child) ? 'text-white' : 'text-neutral-500'
            } cursor-pointer whitespace-nowrap leading-[1.125rem]`}
            onClick={() => setNavbarState({ type: 'hovered', segmentNode: child })}
          >
            {t(child.name)}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNavDetail() {
  const { navbarState } = useNavbarContext();
  const curNode = useCurrentSegmentNode();

  if (navbarState.type !== 'hovered') return <></>;

  return (
    <div className="no-scrollbar absolute bottom-0 left-0 right-0 top-0 z-40 overflow-y-scroll bg-[#1f2021] pl-[3.75rem] pt-10">
      <NavTree node={navbarState.segmentNode} curNode={curNode} />
    </div>
  );
}

interface NavTreeProps {
  node: SegmentNode;
  curNode: SegmentNode;
  depth?: number;
}

function NavTree({ node, curNode, depth = 0 }: NavTreeProps) {
  const marginBottom = depth === 0 ? '1.75rem' : '1.5rem';

  return (
    <>
      {depth !== 0 && (
        <NavTreeRow segmentNode={node} highlight={curNode === node} marginBottom={marginBottom} />
      )}
      {node.children !== null && 0 < node.children.length && (
        <div className="mb-11 ml-5">
          {node.children.map((child, i) => (
            <NavTree key={i} node={child} curNode={curNode} depth={depth + 1} />
          ))}
        </div>
      )}
    </>
  );
}
