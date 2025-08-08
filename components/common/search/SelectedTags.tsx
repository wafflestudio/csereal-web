import { useTranslations } from 'next-intl';

import Tags, { TagI } from '@/components/common/Tags';

interface SelectedTagsProps {
  tags: TagI[];
  search: (tags: string[]) => void;
  disabled: boolean;
}

export default function SelectedTags({ tags, search, disabled }: SelectedTagsProps) {
  const t = useTranslations('common');
  const isTagExist = tags.length > 0;

  const deleteTag = (targetTagId: string) => {
    const filteredTagIds = tags.filter((tag) => tag.id !== targetTagId).map((tag) => tag.id);
    search(filteredTagIds);
  };

  const resetTags = () => {
    search([]);
  };

  return (
    <div className="flex items-start justify-between gap-3 px-2.5">
      <Tags
        tags={isTagExist ? tags : [{ id: '전체', text: t('all') }]}
        onDelete={isTagExist ? deleteTag : undefined}
        disabled={disabled}
      />
      {tags.length > 0 && <TagResetButton onClick={resetTags} disabled={disabled} />}
    </div>
  );
}

interface TagResetButtonProps {
  disabled: boolean;
  onClick: () => void;
}

function TagResetButton({ disabled, onClick }: TagResetButtonProps) {
  const t = useTranslations('common');

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[0.125rem] text-main-orange enabled:hover:text-neutral-400"
      disabled={disabled}
    >
      <span className="material-symbols-outlined scale-x-[-1] text-base font-light">refresh</span>
      <span className="whitespace-nowrap text-md">{t('resetTags')}</span>
    </button>
  );
}
