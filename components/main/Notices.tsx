'use client';

import Link from 'next/link';
import { useState } from 'react';

import AddIcon from '@/public/image/add_icon.svg';

import { NoticeCategoryType, NoticeListMainType } from '@/types/main';
import { notice } from '@/types/page';

import { getPath } from '@/utils/page';

import NoticeCategory from './NoticeCategory';
import NoticeListMain from './NoticeListMain';

interface NoticesMainProps {
  notices: NoticeListMainType;
}

const noticePath = getPath(notice);

export default function Notices({ notices }: NoticesMainProps) {
  const [selectedCategory, setSeletedCategory] = useState<NoticeCategoryType>('전체');

  return (
    <section className="relative w-[345px] mr-[180px] px-3 py-1">
      <div className="flex gap-[0.9375rem] items-center mb-3">
        <h4 className="font-bold text-main-orange tracking-wide">공지사항</h4>
        <NoticeCategory selected={selectedCategory} setSelected={setSeletedCategory} />
      </div>
      <NoticeListMain selectedNotices={notices[convertKrCategoryToEn(selectedCategory)]} />
      <MoreNoticesButton selectedCategory={selectedCategory} />
    </section>
  );
}

interface MoreNoticesButtonProps {
  selectedCategory: NoticeCategoryType;
}

function MoreNoticesButton({ selectedCategory }: MoreNoticesButtonProps) {
  const href = selectedCategory === '전체' ? noticePath : `${noticePath}?tag=${selectedCategory}`;

  return (
    <Link href={href} className="absolute top-[150px] right-1 bg-main-orange w-4 h-4 rounded-full ">
      <AddIcon />
    </Link>
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
