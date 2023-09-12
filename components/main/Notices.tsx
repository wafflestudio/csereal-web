'use client';

import { useState } from 'react';

import { NoticeCategoryType, NoticeListMainType } from '@/types/main';

import NoticeCategory from './NoticeCategory';
import NoticeListMain from './NoticeListMain';

interface NoticesMainProps {
  notices: NoticeListMainType;
}

export default function Notices({ notices }: NoticesMainProps) {
  const [selectedCategory, setSeletedCategory] = useState<NoticeCategoryType>('전체');

  return (
    <section className="w-[345px] border border-neutral-900 p-3">
      <div className="flex gap-[0.9375rem] items-center mb-3">
        <h4 className="font-bold text-main-orange tracking-wide">공지사항</h4>
        <NoticeCategory selected={selectedCategory} setSelected={setSeletedCategory} />
      </div>
      <NoticeListMain selectedNotices={notices[convertKrCategoryToEn(selectedCategory)]} />
    </section>
  );
}

const convertKrCategoryToEn = (category: NoticeCategoryType) => {
  switch (category) {
    case '전체':
      return 'all';
    case '장학':
      return 'scholarship';
    case '학부':
      return 'undergraduate';
    case '대학원':
      return 'graduate';
  }
};
