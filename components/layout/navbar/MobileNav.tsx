'use client';

import { useTranslations } from 'next-intl';

import { useNavbarContext } from '@/contexts/NavbarContext';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import { isAncestorNode } from '@/utils/page';
import { SegmentNode, main } from '@/utils/segmentNode';

import NavTreeLabel from './NavtreeRow';

const HEADER_HEIGHT_PX = 68;

export default function MobileNav() {
  const { navbarState } = useNavbarContext();
  if (navbarState.type !== 'hovered') return <></>;

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 z-50 flex h-[100vh] sm:hidden`} // 화면을 덮기 위해 h-[100vh] 필요
      style={{ top: HEADER_HEIGHT_PX }}
    >
      <MobileNavList />
      <MobileNavDetail />
    </div>
  );
}

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
    <nav className="min-w-[100px] grow-[6.25] basis-0 bg-[#323235] pt-10">
      <ul className="flex flex-col gap-9 text-center">
        {main.children?.map((child, i) => (
          <li
            key={i}
            className={`text-sm font-medium ${
              shouldHighlight(child) ? 'text-white' : 'text-neutral-500'
            } cursor-pointer whitespace-nowrap leading-5`}
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
    <div className="relative grow-[13.6875] basis-0">
      <div className="no-scrollbar absolute bottom-0 left-0 right-0 top-0 z-40 overflow-y-scroll bg-[#1f2021] pl-10 pt-10">
        <NavTree node={navbarState.segmentNode} curNode={curNode} />
      </div>
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
        <NavTreeLabel
          segmentNode={node}
          highlight={curNode === node}
          marginBottom={marginBottom}
          fontSize={depth === 1 ? 'text-md' : 'text-sm'}
        />
      )}
      {0 < node.children.length && (
        <div className="mb-11 ml-5">
          {node.children.map((child, i) => (
            <NavTree key={i} node={child} curNode={curNode} depth={depth + 1} />
          ))}
        </div>
      )}
    </>
  );
}
