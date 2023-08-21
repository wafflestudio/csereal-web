import Link from 'next/link';

interface TagsProps {
  tags: string[];
  margin?: string;
  searchPath?: string;
}

export default function Tags({ tags, margin = '', searchPath }: TagsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${margin}`}>
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
    'px-2.5 py-0.5 h-6 border rounded-[1.875rem] border-main-orange text-main-orange  text-xs whitespace-nowrap';

  return searchPath ? (
    <Link
      className={`${tagStyle} hover:bg-main-orange hover:text-white duration-200`}
      href={`${searchPath}?tag=${tag}`}
    >
      {tag}
    </Link>
  ) : (
    <span className={tagStyle}>{tag}</span>
  );
}
