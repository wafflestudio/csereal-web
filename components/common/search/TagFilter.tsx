import { useLocale, useTranslations } from 'next-intl';

import Checkbox from '../form/Checkbox';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  disabled: boolean;
  searchTags: (tags: string[]) => void;
}

export default function TagFilter({ tags, selectedTags, disabled, searchTags }: TagFilterProps) {
  const t = useTranslations('Tag');

  const toggleCheck = (tag: string, isChecked: boolean) => {
    isChecked
      ? searchTags([...selectedTags, tag])
      : searchTags(selectedTags.filter((t) => t !== tag));
  };

  const locale = useLocale();

  return (
    <div>
      <h5 className="mb-3 mr-6 whitespace-nowrap text-md font-bold tracking-wide">태그</h5>
      <div
        className={`gap-x-7 gap-y-2.5 pl-2.5`}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, minmax(${calculateWidth(
            tags.map((tag) => t(tag)),
            locale,
          )}px, auto))`,
        }}
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
