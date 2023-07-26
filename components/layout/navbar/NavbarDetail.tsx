import { SegmentNode } from '@/types/page';

export default function NavbarDetail({ segmentNode }: { segmentNode: SegmentNode }) {
  return (
    <div className="bg-neutral-700 pt-[9.63rem] pl-[3.75rem] w-[22rem] overflow-scroll absolute left-44 top-0 bottom-0">
      <NavTree segmentNode={segmentNode} isRoot />
    </div>
  );
}

function NavTree({ segmentNode, isRoot = false }: { segmentNode: SegmentNode; isRoot?: boolean }) {
  return (
    <>
      {!isRoot && (
        <p className="font-yoon text-[.875rem] text-white font-medium mb-6">{segmentNode.name}</p>
      )}
      <div className="ml-5">
        {segmentNode.children?.map((child) => <NavTree segmentNode={child} />)}
      </div>
    </>
  );
}
