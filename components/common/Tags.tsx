import Link from 'next/link';

import { Location } from '@/types/page';

import { getFullPath } from '@/utils/page';

interface TagsProp {
  tags: string[];
  page: Location;
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
  page: Location;
}

function Tag({ tag, page }: TagProp) {
  return (
    <Link
      href={{ pathname: getFullPath(page), query: { tag: tag } }}
      className="border rounded-[30px] border-main-orange text-main-orange px-2.5 py-0.5 h-[22px] text-xs"
    >
      {tag}
    </Link>
  );
}
