'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import { Tag } from '../common/Tags';

const NOTICE_CATEGORY = ['전체', '장학', '학부', '대학원'] as const;

type NoticeCategoryType = (typeof NOTICE_CATEGORY)[number];

export default function Notices() {
  const [selectedCategory, setSeletedCategory] = useState<NoticeCategoryType>('전체');

  return (
    <section>
      <div>
        <h4>공지사항</h4>
        <NoticeCategory selected={selectedCategory} setSelected={setSeletedCategory} />
      </div>
    </section>
  );
}
interface NoticeCategoryProps {
  selected: NoticeCategoryType;
  setSelected: Dispatch<SetStateAction<NoticeCategoryType>>;
}

function NoticeCategory({ selected, setSelected }: NoticeCategoryProps) {
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
