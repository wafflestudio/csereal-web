import { Tag } from '../Tags';

interface SelectedTagsProps {
  tags: string[];
  deleteTag: (tag: string) => void;
  resetTags: () => void;
  disabled: boolean;
}

export default function SelectedTags({ tags, deleteTag, resetTags, disabled }: SelectedTagsProps) {
  return (
    <div className="flex justify-between items-start gap-3 px-2.5">
      <Tags tags={tags.length ? tags : ['전체']} deleteTag={deleteTag} disabled={disabled} />
      {tags.length > 0 && <TagResetButton onClick={resetTags} disabled={disabled} />}
    </div>
  );
}

interface TagsProps {
  tags: string[];
  disabled: boolean;
  deleteTag: (tag: string) => void;
}

function Tags({ tags, disabled, deleteTag }: TagsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5`}>
      {tags.map((tag) => (
        <Tag
          key={tag}
          tag={tag}
          onDelete={tag === '전체' ? undefined : deleteTag}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

interface TagResetButtonProps {
  disabled: boolean;
  onClick: () => void;
}

function TagResetButton({ disabled, onClick }: TagResetButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[0.125rem] text-main-orange enabled:hover:text-neutral-400 text-sm whitespace-nowrap"
      disabled={disabled}
    >
      <span className="material-symbols-outlined scale-x-[-1] font-light text-base">refresh</span>
      <span>태그 초기화</span>
    </button>
  );
}
