'use client';

import { Link } from '@/navigation';

interface TagsProps {
  tags: string[];
  margin?: string;
  searchPath?: string;
  disabled?: boolean;
  onClick?: (tag: string) => void;
  onDelete?: (tag: string) => void;
}

export default function Tags({
  tags,
  margin = '',
  searchPath,
  disabled,
  onClick,
  onDelete,
}: TagsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${margin}`}>
      {searchPath
        ? tags.map((tag) => (
            <Link key={tag} href={`${searchPath}?tag=${tag}`} className="rounded-[1.875rem]">
              <Tag tag={tag} hoverStyle="fill" />
            </Link>
          ))
        : tags.map((tag) => (
            <Tag key={tag} tag={tag} disabled={disabled} onClick={onClick} onDelete={onDelete} />
          ))}
    </div>
  );
}

type HoverStyle = 'fill' | 'orange';
type DefaultStyle = 'orange' | 'gray' | 'fill';

const HOVER_STYLE: { [key in HoverStyle]: string } = {
  fill: 'font-noto hover:bg-main-orange hover:border-main-orange hover:text-white',
  orange: 'hover:bg-white hover:border-main-orange hover:text-main-orange',
};

const DEFAULT_STYLE: { [key in DefaultStyle]: string } = {
  orange: 'bg-white border-main-orange text-main-orange ',
  gray: 'bg-white border-neutral-400 text-neutral-400',
  fill: 'font-noto bg-main-orange border-main-orange text-white',
};

interface TagProps {
  tag: string;
  hoverStyle?: HoverStyle;
  defaultStyle?: DefaultStyle;
  disabled?: boolean;
  onClick?: (tag: string) => void;
  onDelete?: (tag: string) => void;
}

export function Tag({
  tag,
  hoverStyle,
  defaultStyle = 'orange',
  disabled = false,
  onClick,
  onDelete,
}: TagProps) {
  const tagClass =
    'flex items-center pl-2.5 h-[26px] border rounded-[1.875rem] text-[13px] font-medium whitespace-nowrap duration-200';
  const defaultClass = DEFAULT_STYLE[defaultStyle];
  const hoverClass = hoverStyle ? `${HOVER_STYLE[hoverStyle]} cursor-pointer` : '';

  return (
    <span className={`${tagClass} ${defaultClass} ${hoverClass}`} onClick={() => onClick?.(tag)}>
      <span className={onDelete ? '' : 'pr-2.5'}>{tag}</span>
      {onDelete && (
        <button
          className={`flex items-center h-full pl-1 pr-2.5 text-main-orange enabled:hover:text-neutral-400 enabled:active:text-main-orange`}
          disabled={disabled}
          onClick={() => !disabled && onDelete(tag)}
        >
          <span className="material-symbols-outlined text-sm">close</span>
        </button>
      )}
    </span>
  );
}
