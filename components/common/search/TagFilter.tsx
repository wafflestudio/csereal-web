import { SetStateAction } from 'react';

import Checkbox from '../Checkbox';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  setSelectedTags: React.Dispatch<SetStateAction<string[]>>;
  disabled: boolean;
}

// TODO: 나중에 태그 확정되면 반응형 추가해서 수정
const gridStyle = 'grid-cols-[repeat(6,_max-content)]';

export default function TagFilter({
  tags,
  selectedTags,
  setSelectedTags,
  disabled,
}: TagFilterProps) {
  const toggleCheck = (tag: string, isChecked: boolean) => {
    isChecked
      ? setSelectedTags((prev) => [...prev, tag])
      : setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  return (
    <div>
      <h5 className="mb-3 mr-6 text-md font-bold whitespace-nowrap tracking-wide">태그</h5>
      <div className={`grow grid ${gridStyle} gap-x-7 gap-y-2.5 pl-2.5`}>
        {tags.map((tag) => (
          <Checkbox
            key={tag}
            label={tag}
            isChecked={selectedTags.includes(tag)}
            toggleCheck={toggleCheck}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}
