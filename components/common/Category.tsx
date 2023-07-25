'use client';

import { useState } from 'react';

import Checkbox from './Checkbox';

interface CategoryProps {
  category: string[];
}

export default function Category({ category }: CategoryProps) {
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
            <Checkbox key={tag} tag={tag} />
          ))}
        </div>
      )}
    </div>
  );
}
