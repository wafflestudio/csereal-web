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
    'px-2.5 py-0.5 h-6 border rounded-[1.875rem] border-main-orange text-main-orange hover:bg-main-orange hover:text-white text-xs whitespace-nowrap duration-200';

  return searchPath ? (
    <Link className={tagStyle} href={`${searchPath}?tag=${tag}`}>
      {tag}
    </Link>
  ) : (
    <span className={tagStyle}>{tag}</span>
  );
}
