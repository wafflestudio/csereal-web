import { Dispatch, SetStateAction } from 'react';

import { NOTICE_CATEGORY, NoticeCategoryType } from '@/types/main';

import { Tag } from '../common/Tags';

interface NoticeCategoryProps {
  selected: NoticeCategoryType;
  setSelected: Dispatch<SetStateAction<NoticeCategoryType>>;
}

export default function NoticeCategory({ selected, setSelected }: NoticeCategoryProps) {
  return (
    <ul className="flex gap-2.5">
      {NOTICE_CATEGORY.map((category) => (
        <CategoryItem
          key={category}
          category={category}
          isSelected={category === selected}
          onClick={() => {
            setSelected(category);
          }}
        />
      ))}
    </ul>
  );
}

interface CategoryItemProps {
  category: NoticeCategoryType;
  isSelected: boolean;
  onClick: () => void;
}

function CategoryItem({ category, isSelected, onClick }: CategoryItemProps) {
  return (
    <li key={category}>
      <Tag
        tag={category}
        defaultStyle={isSelected ? 'orange' : 'gray'}
        hoverStyle="orange"
        onClick={onClick}
      />
    </li>
  );
}
