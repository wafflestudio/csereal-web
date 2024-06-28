import { Link } from '@/navigation';

import RangeBolded from '@/components/common/RangeBolded';

import { NavTreeNode } from '@/constants/navTreeNode';

import { getPath } from '@/utils/page';

type BasicRowProps = {
  href: string;
  title: string;
  partialDescription: string;
  boldStartIndex: number;
  boldEndIndex: number;
  node: NavTreeNode;
};

export default function BasicRow({ href, title, node, ...description }: BasicRowProps) {
  return (
    <div className="ml-5 flex flex-col gap-2 sm:gap-2.5">
      <Link className="text-base font-bold hover:underline" href={href}>
        {title}
      </Link>
      <RangeBolded {...description} />
      <Link
        className="text-md font-medium text-main-orange hover:underline"
        href={getPath(node)}
      >{`${node.parent?.name} > ${node?.name}`}</Link>
    </div>
  );
}
