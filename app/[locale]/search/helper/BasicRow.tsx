import { Link } from '@/navigation';

import RangeBolded from '@/components/common/RangeBolded';

import { SegmentNode } from '@/utils/segmentNode';

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
    <Link className="ml-5 flex flex-col gap-[0.63rem]" href={href}>
      <h3 className="text-base font-bold">{title}</h3>
      <RangeBolded {...description} />
      <p className="text-md font-medium text-main-orange hover:underline">{`${node.parent?.name} > ${node?.name}`}</p>
    </Link>
  );
}
