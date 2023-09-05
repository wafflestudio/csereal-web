'use client';

import Link from 'next/link';

import { useNavbarContext } from '@/contexts/NavbarContext';

import { StraightNode } from '@/components/common/Nodes';

import { useLanguage } from '@/hooks/useLanguage';

import { SegmentNode } from '@/types/page';

import { getPath } from '@/utils/page';
import { capitalizeFirstLetter } from '@/utils/replaceCharacter';

export default function NavTreeRow({
  segmentNode,
  highlight,
}: {
  segmentNode: SegmentNode;
  highlight: boolean;
}) {
  const { isEnglish } = useLanguage();

  const { setNavbarState } = useNavbarContext();
  const closeNavbar = () => setNavbarState({ type: 'closed' });
  const href = isEnglish ? '/en' + getPath(segmentNode) : getPath(segmentNode);

  if (highlight) {
    return (
      <div className="flex items-center mb-6">
        <Link
          href={href}
          className="font-yoon text-md mr-4 font-medium text-main-orange shrink-0"
          onClick={closeNavbar}
        >
          {isEnglish ? capitalizeFirstLetter(segmentNode.segment) : segmentNode.name}
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
          {isEnglish ? capitalizeFirstLetter(segmentNode.segment) : segmentNode.name}
        </Link>
      );
    } else {
      return (
        <p className="block font-yoon text-md font-medium mb-6 text-neutral-500">
          {isEnglish ? capitalizeFirstLetter(segmentNode.segment) : segmentNode.name}
        </p>
      );
    }
  }
}
