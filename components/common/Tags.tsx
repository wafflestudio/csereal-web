import Link from 'next/link';

interface TagsProp {
  tags: string[];
  page: 'notice' | 'news';
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
  page: 'notice' | 'news';
}

function Tag({ tag, page }: TagProp) {
  return (
    <Link
      href={{ pathname: `/${page}`, query: { tag: tag } }}
      className="border rounded-[30px] border-orange text-orange px-2.5 py-1"
    >
      {tag}
    </Link>
  );
}
