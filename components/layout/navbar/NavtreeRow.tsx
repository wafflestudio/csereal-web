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
  fontSize?: string;
};

export default function NavTreeLabel({
  segmentNode,
  highlight,
  marginBottom,
  fontSize,
}: NavTreeRowProps) {
  const href = getPath(segmentNode);

  if (highlight) {
    return (
      <HighlightedLabel
        href={href}
        text={segmentNode.name}
        marginBottom={marginBottom}
        fontSize={fontSize}
      />
    );
  } else if (segmentNode.isPage) {
    return (
      <LinkLabel
        href={href}
        text={segmentNode.name}
        marginBottom={marginBottom}
        fontSize={fontSize}
      />
    );
  } else {
    return <TextLabel text={segmentNode.name} marginBottom={marginBottom} fontSize={fontSize} />;
  }
}

function HighlightedLabel({
  href,
  text,
  marginBottom,
  fontSize = 'text-md',
}: {
  href: string;
  text: string;
  marginBottom: string;
  fontSize?: string;
}) {
  return (
    <div className="flex items-center" style={{ marginBottom }}>
      <Link
        href={href}
        className={`mr-4 h-[1.0625rem] shrink-0  font-medium text-main-orange ${fontSize}`}
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
  fontSize = 'text-md',
}: {
  href: string;
  text: string;
  marginBottom: string;
  fontSize?: string;
}) {
  return (
    <Link
      href={href}
      className={`mb-6 block h-[1.0625rem] font-medium leading-5 text-white hover:text-main-orange ${fontSize}`}
      style={{ marginBottom }}
    >
      <NavLabel text={text} />
    </Link>
  );
}

function TextLabel({
  text,
  marginBottom,
  fontSize = 'text-md',
}: {
  text: string;
  marginBottom: string;
  fontSize?: string;
}) {
  return (
    <p
      className={`mb-6 block h-[1.0625rem] font-medium leading-5 text-white ${fontSize}`}
      style={{ marginBottom }}
    >
      <NavLabel text={text} />
    </p>
  );
}
