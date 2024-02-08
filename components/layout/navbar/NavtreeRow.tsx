'use client';

import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

import { StraightNode } from '@/components/common/Nodes';

import { SegmentNode } from '@/types/page';

import { getPath } from '@/utils/page';

type NavTreeRowProps = {
  segmentNode: SegmentNode;
  highlight: boolean;
};

export default function NavTreeRow({ segmentNode, highlight }: NavTreeRowProps) {
  const href = getPath(segmentNode);

  if (highlight) {
    return <HighlightedRow href={href} text={segmentNode.name} />;
  } else if (segmentNode.isPage) {
    return <LinkRow href={href} text={segmentNode.name} />;
  } else {
    return <TextRow text={segmentNode.name} />;
  }
}

function HighlightedRow({ href, text }: { href: string; text: string }) {
  return (
    <div className="flex items-center mb-6">
      <Link href={href} className="text-md mr-4 font-medium text-main-orange shrink-0">
        <FormattedText text={text} />
      </Link>
      <StraightNode />
    </div>
  );
}

function LinkRow({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="block text-md font-medium mb-6 text-white hover:text-main-orange ">
      <FormattedText text={text} />
    </Link>
  );
}

function TextRow({ text }: { text: string }) {
  return (
    <p className="block text-md font-medium mb-6 text-white">
      <FormattedText text={text} />
    </p>
  );
}

// 예약 부분의 '301-417 (20석)'에서 괄호 부분이 작도록 처리합니다.
const FormattedText = ({ text }: { text: string }) => {
  const t = useTranslations('Nav');

  const idx = text.indexOf('(');
  if (idx === -1) return t(text);

  return (
    <>
      {text.slice(0, idx)}
      <span className="text-xs">{text.slice(idx)}</span>
    </>
  );
};
