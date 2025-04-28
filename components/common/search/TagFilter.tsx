import { useLocale, useTranslations } from 'next-intl';

import useStyle from '@/utils/hooks/useStyle';

import Checkbox from '../../form/legacy/Checkbox';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  disabled: boolean;
  searchTags: (tags: string[]) => void;
}

export default function TagFilter({ tags, selectedTags, disabled, searchTags }: TagFilterProps) {
  const t = useTranslations('Tag');

  const toggleCheck = (tag: string, isChecked: boolean) => {
    if (isChecked) {
      searchTags([...selectedTags, tag]);
    } else {
      searchTags(selectedTags.filter((t) => t !== tag));
    }
  };

  const locale = useLocale();

  return (
    <div>
      <h5 className="mb-3 mr-6 whitespace-nowrap text-md font-bold tracking-wide">{t('태그')}</h5>
      <div
        className={`grid gap-x-7 gap-y-2.5 pl-2.5`}
        {...useStyle(
          (style) => {
            style.gridTemplateColumns = `repeat(auto-fill, minmax(${calculateWidth(
              tags.map((tag) => t(tag)),
              locale,
            )}px, auto))`;
          },
          [tags],
        )}
      >
        {tags.map((tag) => (
          <Checkbox
            key={tag}
            label={t(tag)}
            isChecked={selectedTags.includes(tag)}
            toggleCheck={() => toggleCheck(tag, !selectedTags.includes(tag))}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

const calculateWidth = (words: string[], locale: string) => {
  const widthPerLetter = locale === 'ko' ? 12 : 7;

  let longestLength = 0;
  for (const word of words) {
    if (word.length > longestLength) longestLength = word.length;
  }

  return widthPerLetter * longestLength;
};
