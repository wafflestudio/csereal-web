import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

import { SegmentNode } from '@/types/page';

import NavTreeRow from './NavtreeRow';

export default function NavbarDetail({ segmentNode }: { segmentNode: SegmentNode }) {
  const curNode = useCurrentSegmentNode();

  return (
    // 네비바가 펼쳐질 때 뒷배경이 일시적으로 보이는 문제를 막기 위해 화면 왼쪽부터 시작합니다.
    <div className="bg-[#1f2021] backdrop-blur-[2px] pt-[8.8125rem] pl-[14.75rem] w-[33rem] overflow-y-scroll no-scrollbar absolute left-0 top-0 bottom-0 z-40">
      <NavTree node={segmentNode} curNode={curNode} isRoot />
    </div>
  );
}

interface NavTreeProps {
  node: SegmentNode;
  curNode: SegmentNode;
  isRoot?: boolean;
}

function NavTree({ node, isRoot = false, curNode }: NavTreeProps) {
  return (
    <>
      {!isRoot && <NavTreeRow segmentNode={node} highlight={curNode === node} />}
      <div className="ml-5">
        {node.children?.map((child, i) => <NavTree key={i} node={child} curNode={curNode} />)}
      </div>
    </>
  );
}
