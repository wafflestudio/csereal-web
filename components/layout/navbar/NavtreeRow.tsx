'use client';

import { Link } from '@/navigation';

import NavLabel from '@/components/common/NavLabel';
import { StraightNode } from '@/components/common/Nodes';

import { getPath } from '@/utils/page';
import { SegmentNode } from '@/utils/segmentNode';

type NavTreeRowProps = {
  segmentNode: SegmentNode;
  highlight: boolean;
  marginBottom: string;
};

export default function NavTreeRow({ segmentNode, highlight, marginBottom }: NavTreeRowProps) {
  const href = getPath(segmentNode);

  if (highlight) {
    return <HighlightedRow href={href} text={segmentNode.name} marginBottom={marginBottom} />;
  } else if (segmentNode.isPage) {
    return <LinkRow href={href} text={segmentNode.name} marginBottom={marginBottom} />;
  } else {
    return <TextRow text={segmentNode.name} marginBottom={marginBottom} />;
  }
}

function HighlightedRow({
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
        className="text-md mr-4 font-medium text-main-orange shrink-0 h-[1.0625rem]"
      >
        <NavLabel text={text} />
      </Link>
      <StraightNode />
    </div>
  );
}

function LinkRow({
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
      className="block text-md leading-5 font-medium mb-6 text-white hover:text-main-orange h-[1.0625rem]"
      style={{ marginBottom }}
    >
      <NavLabel text={text} />
    </Link>
  );
}

function TextRow({ text, marginBottom }: { text: string; marginBottom: string }) {
  return (
    <p
      className="block text-md leading-5 font-medium mb-6 text-white h-[1.0625rem]"
      style={{ marginBottom }}
    >
      <NavLabel text={text} />
    </p>
  );
}
