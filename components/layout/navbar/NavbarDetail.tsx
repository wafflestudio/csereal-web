import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

import { SegmentNode } from '@/types/page';

import NavTreeRow from './NavtreeRow';

export default function NavbarDetail({ segmentNode }: { segmentNode: SegmentNode }) {
  const currentSegmentNode = useCurrentSegmentNode();

  return (
    <div className="bg-[#1f2021] backdrop-blur-[2px] pt-[8.8125rem] pl-[14.75rem] w-[33rem] overflow-x-hidden overflow-y-scroll no-scrollbar absolute top-0 bottom-0 z-40">
      <NavTree node={segmentNode} currentNode={currentSegmentNode} isRoot />
    </div>
  );
}

interface NavTreeProps {
  // 순회중인 트리의 루트 노드
  node: SegmentNode;
  // 현재 URL로부터 얻어낸 노드
  currentNode: SegmentNode;
  isRoot?: boolean;
}

function NavTree({ node: segmentNode, isRoot = false, currentNode }: NavTreeProps) {
  return (
    <>
      {!isRoot && <NavTreeRow segmentNode={segmentNode} highlight={currentNode === segmentNode} />}
      <div className="ml-5">
        {segmentNode.children?.map((child, i) => (
          <NavTree key={i} node={child} currentNode={currentNode} />
        ))}
      </div>
    </>
  );
}
