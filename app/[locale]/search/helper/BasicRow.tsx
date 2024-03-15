import { Link } from '@/navigation';

import RangeBolded from '@/components/common/RangeBolded';

import { getPath } from '@/utils/page';
import { SegmentNode } from '@/utils/segmentNode';

import OrangeCircle from './OrangeCircle';

type BasicRowProps = {
  href: string;
  title: string;
  partialDescription: string;
  boldStartIndex: number;
  boldEndIndex: number;
  node: SegmentNode;
};

export default function BasicRow({ href, title, node, ...description }: BasicRowProps) {
  return (
    <Link className="flex flex-col gap-[0.63rem]" href={href}>
      <div className="flex items-center gap-2">
        <OrangeCircle />
        <h3 className="text-[1.0625rem] font-semibold">{title}</h3>
      </div>
      <div className="ml-5 flex flex-col gap-[0.63rem]">
        <RangeBolded {...description} />
        <Link
          href={getPath(node)}
          className="text-md font-semibold text-main-orange hover:underline"
        >{`${node.parent?.name} > ${node?.name}`}</Link>
      </div>
    </Link>
  );
}
