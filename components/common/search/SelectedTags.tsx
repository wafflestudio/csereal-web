import { Tag } from '../Tags';

interface SelectedTagsProps {
  initTags: string[];
  deleteTag: (tag: string) => void;
  resetTags: () => void;
  disabled: boolean;
}

export default function SelectedTags({
  initTags,
  deleteTag,
  resetTags,
  disabled,
}: SelectedTagsProps) {
  return (
    <div className="flex justify-between items-start gap-3 px-2.5">
      <Tags tags={initTags.length ? initTags : ['전체']} deleteTag={deleteTag} />
      {initTags.length > 0 && <TagResetButton onClickReset={resetTags} disabled={disabled} />}
    </div>
  );
}

interface TagsProps {
  tags: string[];
  deleteTag: (tag: string) => void;
}

function Tags({ tags, deleteTag }: TagsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-2.5`}>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} onDelete={tag === '전체' ? undefined : deleteTag} />
      ))}
    </div>
  );
}

interface TagResetButtonProps {
  disabled: boolean;
  onClickReset: () => void;
}

function TagResetButton({ disabled, onClickReset }: TagResetButtonProps) {
  return (
    <button
      onClick={onClickReset}
      className="flex items-center gap-[0.125rem] text-main-orange enabled:hover:text-neutral-400 text-xs whitespace-nowrap"
      disabled={disabled}
    >
      <span className="material-symbols-outlined scale-x-[-1] font-light text-base">refresh</span>
      <span>태그 초기화</span>
    </button>
  );
}
