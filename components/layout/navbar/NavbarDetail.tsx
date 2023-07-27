import { StraightNode } from '@/components/common/Nodes';

import { SegmentNode } from '@/types/page';

import { getPath } from '@/utils/page';

import useCurrentSegmentNode from './useCurrentSegmentNode';

export default function NavbarDetail({ segmentNode }: { segmentNode: SegmentNode }) {
  const currentSegmentNode = useCurrentSegmentNode();

  return (
    <div className="bg-neutral-700 pt-[9.63rem] pl-[3.75rem] w-[22rem] overflow-x-hidden overflow-y-scroll no-scrollbar absolute left-44 top-0 bottom-0 z-50 ">
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

function NavTreeRow({ segmentNode, highlight }: { segmentNode: SegmentNode; highlight: boolean }) {
  const href = getPath(segmentNode);
  if (highlight) {
    return (
      <div className="flex items-center mb-6">
        <a
          href={href}
          className="font-yoon text-[.875rem] mr-4 font-medium text-main-orange shrink-0"
        >
          {segmentNode.name}
        </a>
        <StraightNode />
      </div>
    );
  } else {
    if (segmentNode.isPage) {
      return (
        <a
          href={href}
          className="block font-yoon text-[.875rem] font-medium mb-6 text-white hover:text-main-orange "
        >
          {segmentNode.name}
        </a>
      );
    } else {
      return (
        <p className="block font-yoon text-[.875rem] font-medium mb-6 text-white">
          {segmentNode.name}
        </p>
      );
    }
  }
}
