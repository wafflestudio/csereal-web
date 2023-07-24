import Link from 'next/link';

import { PageNames } from '@/types/common';

type PagesUsingTag = PageNames.notice | PageNames.news;

interface TagsProp {
  tags: string[];
  page: PagesUsingTag;
}

export default function Tags({ tags, page }: TagsProp) {
  return (
    <div className="flex items-center gap-2">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} page={page} />
      ))}
    </div>
  );
}

interface TagProp {
  tag: string;
  page: PagesUsingTag;
}

function Tag({ tag, page }: TagProp) {
  return (
    <Link
      href={{ pathname: `/${page}`, query: { tag: tag } }}
      className="border rounded-[30px] border-orange text-orange px-2.5 py-0.5 h-[22px] text-xs"
    >
      {tag}
    </Link>
  );
}
