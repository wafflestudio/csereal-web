import { SegmentNode } from '@/types/page';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';


import NavTreeRow from './NavtreeRow';

export default function NavbarDetail({ segmentNode }: { segmentNode: SegmentNode }) {
  const curNode = useCurrentSegmentNode();

  return (
    // 네비바가 펼쳐질 때 뒷배경이 일시적으로 보이는 문제를 막기 위해 화면 왼쪽부터 시작합니다.
    <div className="bg-[#1f2021] backdrop-blur-[2px] pt-[9.62rem] pl-[14.75rem] w-[33rem] overflow-y-scroll no-scrollbar absolute left-0 top-0 bottom-0 z-40">
      <NavTree node={segmentNode} curNode={curNode} />
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
        <div className="ml-5 mb-11">
          {node.children.map((child, i) => (
            <NavTree key={i} node={child} curNode={curNode} depth={depth + 1} />
          ))}
        </div>
      )}
    </>
  );
}
