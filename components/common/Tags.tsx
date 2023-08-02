import Link from 'next/link';

import { SegmentNode } from '@/types/page';

import { getPath } from '@/utils/page';

interface TagsProps {
  tags: string[];
  page: SegmentNode; // page using tag search (notice, news)
  margin?: string;
}

export default function Tags({ tags, page, margin = '' }: TagsProps) {
  return (
    <div className={`flex items-center gap-2 ${margin}`}>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} page={page} />
      ))}
    </div>
  );
}

interface TagProps {
  tag: string;
  page: SegmentNode;
}

function Tag({ tag, page }: TagProps) {
  return (
    <Link
      href={{ pathname: getPath(page), query: { tag: tag } }}
      className="border rounded-[1.875rem] border-main-orange text-main-orange px-2.5 py-0.5 h-[1.4375rem] text-xs"
    >
      {tag}
    </Link>
  );
}
