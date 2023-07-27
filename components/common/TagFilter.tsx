'use client';

import { useReducer } from 'react';

import { QueryBehavior, QueryName } from '@/utils/search';

import TagCheckbox from './TagCheckbox';

interface TagFilterProps {
  category: string[];
  selectedTags: string[]; // useCustomSearchParams에 있는 tags
  setSearchParams(type: QueryBehavior, name: QueryName, value: string, replace?: boolean): void; // 마찬가지
}

export default function TagFilter({ category, selectedTags, setSearchParams }: TagFilterProps) {
  const [isOpen, toggleCategory] = useReducer((x) => !x, true);
  const iconName = isOpen ? 'expand_less' : 'expand_more';

  const toggleCheck = (tag: string) => {
    const isChecked = selectedTags.includes(tag);
    setSearchParams(isChecked ? 'delete' : 'add', 'tag', tag, false);
  };

  return (
    <div className="mb-3">
      <h4 className="flex items-center gap-1 cursor-pointer w-fit" onClick={toggleCategory}>
        <span className="text-sm font-bold font-yoon">분류</span>
        <span className="material-symbols-outlined font-semibold">{iconName}</span>
      </h4>
      {isOpen && (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(100px,_max-content))] gap-x-3.5 gap-y-2.5 pl-[10px] mt-3 mb-6">
          {category.map((tag) => (
            <TagCheckbox
              key={tag}
              tag={tag}
              isChecked={selectedTags.includes(tag)}
              toggleCheck={() => toggleCheck(tag)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
