import Link from 'next/link';

import { SegmentNode } from '@/types/page';

import { getPath } from '@/utils/page';

interface TagsProp {
  tags: string[];
  page: SegmentNode;
}

export default function Tags({ tags, page, margin = '' }: TagsProp) {
  return (
    <div className={`flex items-center gap-2 ${margin}`}>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} page={page} />
      ))}
    </div>
  );
}

interface TagProp {
  tag: string;
  page: SegmentNode;
}

function Tag({ tag, page }: TagProp) {
  return (
    <Link
      href={{ pathname: getPath(page), query: { tag: tag } }}
      className="border rounded-[30px] border-main-orange text-main-orange px-2.5 py-0.5 h-[22px] text-xs"
    >
      {tag}
    </Link>
  );
}
