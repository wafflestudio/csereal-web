'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import { NoticeCategoryType } from '@/types/main';

import NoticeCategory from './NoticeCategory';

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
