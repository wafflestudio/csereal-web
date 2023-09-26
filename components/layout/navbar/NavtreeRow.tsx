'use client';

import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import { StraightNode } from '@/components/common/Nodes';

import { SegmentNode } from '@/types/page';

import { getPath } from '@/utils/page';

export default function NavTreeRow({
  segmentNode,
  highlight,
}: {
  segmentNode: SegmentNode;
  highlight: boolean;
}) {
  const t = useTranslations('Nav');
  const href = getPath(segmentNode);

  if (highlight) {
    return (
      <div className="flex items-center mb-6">
        <Link href={href} className="font-yoon text-md mr-4 font-medium text-main-orange shrink-0">
          {t(segmentNode.name)}
        </Link>
        <StraightNode />
      </div>
    );
  } else {
    if (segmentNode.isPage) {
      return (
        <Link
          href={href}
          className="block font-yoon text-md font-medium mb-6 text-neutral-800 hover:text-main-orange "
        >
          {t(segmentNode.name)}
        </Link>
      );
    } else {
      return (
        <p className="block font-yoon text-md font-medium mb-6 text-neutral-500">
          {t(segmentNode.name)}
        </p>
      );
    }
  }
}
