'use client';

import { Link } from '@/navigation';

import { StraightNode } from '@/components/common/Nodes';
import NavLabel from '@/components/layout/navbar/NavLabel';

import { getPath } from '@/utils/page';
import { SegmentNode } from '@/utils/segmentNode';

type NavTreeRowProps = {
  segmentNode: SegmentNode;
  highlight: boolean;
  marginBottom: string;
};

export default function NavTreeLabel({ segmentNode, highlight, marginBottom }: NavTreeRowProps) {
  const href = getPath(segmentNode);

  if (highlight) {
    return <HighlightedLabel href={href} text={segmentNode.name} marginBottom={marginBottom} />;
  } else if (segmentNode.isPage) {
    return <LinkLabel href={href} text={segmentNode.name} marginBottom={marginBottom} />;
  } else {
    return <TextLabel text={segmentNode.name} marginBottom={marginBottom} />;
  }
}

function HighlightedLabel({
  href,
  text,
  marginBottom,
}: {
  href: string;
  text: string;
  marginBottom: string;
}) {
  return (
    <div className="flex items-center" style={{ marginBottom }}>
      <Link
        href={href}
        className="mr-4 h-[1.0625rem] shrink-0 text-md font-medium text-main-orange"
      >
        <NavLabel text={text} />
      </Link>
      <StraightNode />
    </div>
  );
}

function LinkLabel({
  href,
  text,
  marginBottom,
}: {
  href: string;
  text: string;
  marginBottom: string;
}) {
  return (
    <Link
      href={href}
      className="mb-6 block h-[1.0625rem] text-md font-medium leading-5 text-white hover:text-main-orange"
      style={{ marginBottom }}
    >
      <NavLabel text={text} />
    </Link>
  );
}

function TextLabel({ text, marginBottom }: { text: string; marginBottom: string }) {
  return (
    <p
      className="mb-6 block h-[1.0625rem] text-md font-medium leading-5 text-white"
      style={{ marginBottom }}
    >
      <NavLabel text={text} />
    </p>
  );
}
