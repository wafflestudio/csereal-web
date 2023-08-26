'use client';

import Link from 'next/link';

interface TagsProps {
  tags: string[];
  margin?: string;
  searchPath?: string;
}

export default function Tags({ tags, margin = '', searchPath }: TagsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${margin}`}>
      {searchPath
        ? tags.map((tag) => (
            <Link key={tag} href={`${searchPath}?tag=${tag}`} className="rounded-[1.875rem]">
              <Tag tag={tag} hoverStyle="fill" />
            </Link>
          ))
        : tags.map((tag) => <Tag key={tag} tag={tag} />)}
    </div>
  );
}

type HoverStyle = 'fill' | 'orange';
type DefaultStyle = 'orange' | 'gray' | 'fill';

const HOVER_STYLE: { [key in HoverStyle]: string } = {
  fill: 'hover:bg-main-orange hover:border-main-orange hover:text-white',
  orange: 'hover:bg-white hover:border-main-orange text-main-orange',
};

const DEFAULT_STYLE: { [key in DefaultStyle]: string } = {
  orange: 'bg-white border-main-orange text-main-orange',
  gray: 'bg-white border-neutral-400 text-neutral-400',
  fill: 'bg-main-orange border-main-orange text-white',
};

interface TagProps {
  tag: string;
  hoverStyle?: HoverStyle;
  defaultStyle?: DefaultStyle;
  onClick?: (tag: string) => void;
}

export function Tag({ tag, hoverStyle, defaultStyle = 'orange', onClick }: TagProps) {
  const tagClass =
    'px-2.5 py-0.5 h-6 border rounded-[1.875rem] text-xs whitespace-nowrap cursor-default duration-200';
  const defaultClass = DEFAULT_STYLE[defaultStyle];
  const hoverClass = hoverStyle ? `${HOVER_STYLE[hoverStyle]} cursor-pointer` : '';

  return (
    <span
      className={`${tagClass} ${defaultClass} ${hoverClass}`}
      onClick={() => {
        onClick && onClick(tag);
      }}
    >
      {tag}
    </span>
  );
}
