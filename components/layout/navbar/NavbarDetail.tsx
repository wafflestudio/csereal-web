import { SegmentNode } from '@/types/page';
import useCurrentSegmentNode from './useCurrentSegmentNode';
import { StraightNode } from '@/components/common/Nodes';
import { getPath } from '@/utils/page';

export default function NavbarDetail({ segmentNode }: { segmentNode: SegmentNode }) {
  const currentSegmentNode = useCurrentSegmentNode();

  return (
    <div className="bg-neutral-700 pt-[9.63rem] pl-[3.75rem] w-[22rem] overflow-scroll absolute left-44 top-0 bottom-0">
      <NavTree segmentNode={segmentNode} isRoot currentSegmentNode={currentSegmentNode} />
    </div>
  );
}

interface NavTreeProps {
  segmentNode: SegmentNode;
  isRoot?: boolean;
  currentSegmentNode: SegmentNode;
}

function NavTree({ segmentNode, isRoot = false, currentSegmentNode }: NavTreeProps) {
  const isCurrentNode = currentSegmentNode === segmentNode;

  return (
    <>
      {!isRoot && (
        <NavTreeText segmentNode={segmentNode} isCurrent={currentSegmentNode === segmentNode} />
      )}
      <div className="ml-5">
        {segmentNode.children?.map((child) => (
          <NavTree segmentNode={child} currentSegmentNode={currentSegmentNode} />
        ))}
      </div>
    </>
  );
}

function NavTreeText({ segmentNode, isCurrent }: { segmentNode: SegmentNode; isCurrent: boolean }) {
  const href = getPath(segmentNode);
  if (isCurrent) {
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
