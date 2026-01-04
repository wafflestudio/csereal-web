import { useLocale, useTranslations } from 'next-intl';

import Checkbox from '@/components/form/legacy/Checkbox';
import useStyle from '@/utils/hooks/useStyle';

interface TagFilterProps {
  tags: { id: string; text: string }[];
  selectedTags: string[];
  disabled: boolean;
  searchTags: (tags: string[]) => void;
}

export default function TagFilter({ tags, selectedTags, disabled, searchTags }: TagFilterProps) {
  const t = useTranslations('common');

  const toggleCheck = (tag: string, isChecked: boolean) => {
    if (isChecked) {
      searchTags([...selectedTags, tag]);
    } else {
      searchTags(selectedTags.filter((t) => t !== tag));
    }
  };

  const locale = useLocale();

  return (
    <div id="tagfilter">
      <h5 className="mb-3 mr-6 whitespace-nowrap text-md font-bold tracking-wide">{t('tag')}</h5>
      <div
        className={`grid gap-x-7 gap-y-2.5 pl-2.5`}
        {...useStyle(
          (style) => {
            style.gridTemplateColumns = `repeat(auto-fill, minmax(${calculateWidth(
              tags.map((tag) => tag.text),
              locale,
            )}px, auto))`;
          },
          [tags],
        )}
      >
        {tags.map((tag) => (
          <Checkbox
            key={tag.id}
            label={tag.text}
            isChecked={selectedTags.includes(tag.id)}
            toggleCheck={() => toggleCheck(tag.id, !selectedTags.includes(tag.text))}
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
