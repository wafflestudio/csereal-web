import { Link } from '@/navigation';

import { CurvedVerticalNode } from '@/components/common/Nodes';

export type TreeNode = {
  name: string;
  size?: number;
  children?: TreeNode[];
  bold?: boolean;
};

const INDENTATION = 16;

// TODO: 번역
export default function SearchSubNavbar({ node }: { node: TreeNode[] }) {
  return (
    <div className="absolute right-[80px] top-0 hidden h-full sm:block">
      <div className="sticky top-[52px] mb-8 mt-[3.25rem] flex">
        {/* TODO: wrapper div가 있어야 상하로 잘 늘어나는 이유 찾기 */}
        <div>
          <CurvedVerticalNode grow />
        </div>
        <div className="pl-1.5 pt-[0.6875rem]">
          <h3 className="mb-4 text-base font-semibold text-neutral-800">통합검색</h3>
          <ul className="flex flex-col gap-[0.87rem]">
            {node.map((childNode, idx) => (
              <SubTab node={childNode} key={idx} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const SubTab = ({ node }: { node: TreeNode }) => {
  return (
    <>
      <Link
        href={`#nav_${node.name}`}
        className={`text-sm ${node.bold ? 'font-bold text-main-orange' : 'text-neutral-700'} ${
          node.size === undefined || node.size === 0 ? 'pointer-events-none' : ''
        }`}
        style={{ marginLeft: INDENTATION }}
      >
        {node.name}
        {node.size !== undefined && `(${node.size})`}
      </Link>
      {node.children?.map((childNode, idx) => (
        <Link
          href={`#nav_${childNode.name}`}
          className={`text-sm text-neutral-700 ${
            childNode.size === undefined || childNode.size === 0 ? 'pointer-events-none' : ''
          }`}
          key={idx}
          style={{ marginLeft: INDENTATION * 2 }}
        >
          {childNode.name}
          {childNode.size !== undefined && `(${childNode.size})`}
        </Link>
      ))}
    </>
  );
};
