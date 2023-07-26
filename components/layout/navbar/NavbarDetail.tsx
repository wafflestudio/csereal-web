import { SegmentNode } from '@/types/page';
import useCurrentSegmentNode from './useCurrentSegmentNode';
import { StraightNode } from '@/components/common/Nodes';
import { getPath } from '@/utils/page';

export default function NavbarDetail({ segmentNode }: { segmentNode: SegmentNode }) {
  const currentSegmentNode = useCurrentSegmentNode();

  return (
    <div className="bg-neutral-700 pt-[9.63rem] pl-[3.75rem] w-[22rem] overflow-scroll absolute left-44 top-0 bottom-0">
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
      {!isRoot && <NavTreeText segmentNode={segmentNode} highlight={currentNode === segmentNode} />}
      <div className="ml-5">
        {segmentNode.children?.map((child) => <NavTree node={child} currentNode={currentNode} />)}
      </div>
    </>
  );
}

function NavTreeText({ segmentNode, highlight }: { segmentNode: SegmentNode; highlight: boolean }) {
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
    return (
      <a href={href} className="block font-yoon text-[.875rem] font-medium mb-6 text-white">
        {segmentNode.name}
      </a>
    );
  }
}
