import { SegmentNode } from '@/constants/segmentNode';
import { useNavbarContext } from '@/contexts/NavbarContext';
import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';

import NavTreeLabel from './NavtreeRow';

export default function MobileNavDetail() {
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

const NavTree = ({ node, curNode, depth = 0 }: NavTreeProps) => {
  return (
    <>
      {depth !== 0 && (
        <NavTreeLabel
          segmentNode={node}
          highlight={curNode === node}
          containerClassName={depth === 0 ? 'mbn-[1.75rem]' : 'mb-[1.5rem]'}
          anchorClassName={depth === 1 ? 'text-md' : 'text-sm'}
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
};
