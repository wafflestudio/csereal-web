'use client';

import { useState } from 'react';

import { QueryBehavior, QueryName } from '@/utils/search';

import TagCheckbox from './TagCheckbox';

interface TagCategoryProps {
  category: string[];
  selectedTags: string[]; // useMyURLSearchParams에 있는 tags
  setSearchParams(type: QueryBehavior, name: QueryName, value: string, replace?: boolean): void; // 마찬가지
}

export default function TagCategory({ category, selectedTags, setSearchParams }: TagCategoryProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const iconName = isOpen ? 'expand_less' : 'expand_more';

  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-[24px]">
      <h4
        className="flex items-center gap-1 mb-[8px] cursor-pointer w-fit"
        onClick={toggleCategory}
      >
        <span className="text-sm font-bold font-yoon">분류</span>
        <span className="material-symbols-outlined font-semibold">{iconName}</span>
      </h4>
      {isOpen && (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(110px,_auto))] gap-x-4 gap-y-2 pl-[10px]">
          {category.map((tag) => (
            <TagCheckbox
              key={tag}
              tag={tag}
              isChecked={selectedTags.includes(tag)}
              setSearchParams={setSearchParams}
            />
          ))}
        </div>
      )}
    </div>
  );
}
