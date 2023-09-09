'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { useNavbarContext } from '@/contexts/NavbarContext';

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
  const { setNavbarState } = useNavbarContext();
  const t = useTranslations('Nav');
  const closeNavbar = () => setNavbarState({ type: 'closed' });
  const href = getPath(segmentNode);

  if (highlight) {
    return (
      <div className="flex items-center mb-6">
        <Link
          href={href}
          className="font-yoon text-md mr-4 font-medium text-main-orange shrink-0"
          onClick={closeNavbar}
        >
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
          onClick={closeNavbar}
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
