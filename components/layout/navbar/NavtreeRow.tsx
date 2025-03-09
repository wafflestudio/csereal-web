'use client';

import { StraightNode } from '@/components/common/Nodes';
import NavLabel from '@/components/layout/navbar/NavLabel';
import { SegmentNode } from '@/constants/segmentNode';
import { Link } from '@/i18n/routing';
import { getPath } from '@/utils/page';

type NavTreeRowProps = {
  segmentNode: SegmentNode;
  highlight: boolean;
  containerClassName: string;
  anchorClassName: string;
};

export default function NavTreeLabel({
  segmentNode,
  highlight,
  containerClassName,
  anchorClassName,
}: NavTreeRowProps) {
  const href = getPath(segmentNode);

  if (highlight) {
    return (
      <div className={`flex items-center ${containerClassName}`}>
        <Link
          href={href}
          className={`mr-4 h-[1.0625rem] shrink-0 font-medium text-main-orange ${anchorClassName}`}
        >
          <NavLabel text={segmentNode.name} />
        </Link>
        <StraightNode />
      </div>
    );
  } else if (segmentNode.isPage) {
    return (
      <Link
        href={href}
        className={`mb-6 block h-[1.0625rem] font-medium leading-5 text-white hover:text-main-orange ${anchorClassName} ${containerClassName}`}
      >
        <NavLabel text={segmentNode.name} />
      </Link>
    );
  } else {
    return (
      <p
        className={`mb-6 block h-[1.0625rem] font-medium leading-5 text-white ${containerClassName} ${anchorClassName}`}
      >
        <NavLabel text={segmentNode.name} />
      </p>
    );
  }
}
