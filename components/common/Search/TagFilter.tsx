import { SetStateAction } from 'react';

import TagCheckbox from './TagCheckbox';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  setSelectedTags: React.Dispatch<SetStateAction<string[]>>;
}

export default function TagFilter({ tags, selectedTags, setSelectedTags }: TagFilterProps) {
  const toggleCheck = (tag: string, isChecked: boolean) => {
    isChecked
      ? setSelectedTags(selectedTags.filter((t) => t !== tag))
      : setSelectedTags((prev) => [...prev, tag]);
  };

  return (
    <div className="flex row-span-1 col-span-full mr-2.5">
      <h5 className="text-md font-bold font-yoon whitespace-nowrap mr-6">태그</h5>
      <div className="grow grid grid-cols-[repeat(7,_max-content)] gap-x-6 gap-y-2.5">
        {tags.map((tag) => (
          <TagCheckbox
            key={tag}
            tag={tag}
            isChecked={selectedTags.includes(tag)}
            toggleCheck={toggleCheck}
          />
        ))}
      </div>
    </div>
  );
}
