import Link from 'next/link';

interface TagsProps {
  tags: string[];
  margin?: string;
  searchPath?: string;
}

export default function Tags({ tags, margin = '', searchPath }: TagsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${margin}`}>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} searchPath={searchPath} />
      ))}
    </div>
  );
}

interface TagProps {
  tag: string;
  searchPath?: string;
}

function Tag({ tag, searchPath }: TagProps) {
  const tagStyle =
    'border rounded-[1.875rem] border-main-orange text-main-orange px-2.5 py-0.5 h-6 text-xs whitespace-nowrap';

  return searchPath ? (
    <Link className={tagStyle} href={`${searchPath}?tag=${tag}`}>
      {tag}
    </Link>
  ) : (
    <span className={tagStyle}>{tag}</span>
  );
}
