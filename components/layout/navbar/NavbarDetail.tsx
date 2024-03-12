import { useNavbarContext } from '@/contexts/NavbarContext';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import { SegmentNode } from '@/utils/segmentNode';

import NavTreeLabel from './NavtreeRow';

export default function NavbarDetail() {
  const { navbarState } = useNavbarContext();
  const curNode = useCurrentSegmentNode();

  if (navbarState.type !== 'hovered') return <></>;

  return (
    // 네비바가 펼쳐질 때 뒷배경이 일시적으로 보이는 문제를 막기 위해 화면 왼쪽부터 시작합니다.
    <div className="no-scrollbar absolute bottom-0 left-0 top-0 z-40 w-[33rem] overflow-y-scroll bg-[#1f2021] pl-[14.75rem] pt-[9.62rem] backdrop-blur-[2px]">
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
        <NavTreeLabel segmentNode={node} highlight={curNode === node} marginBottom={marginBottom} />
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
