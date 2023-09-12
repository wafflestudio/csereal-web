'use client';

import { useState } from 'react';

import { NoticeCategoryType } from '@/types/main';

import NoticeCategory from './NoticeCategory';
import NoticeListMain from './NoticeListMain';

interface NoticesMain {}

export default function Notices() {
  const [selectedCategory, setSeletedCategory] = useState<NoticeCategoryType>('전체');

  return (
    <section className="w-[345px] border border-neutral-900 p-3">
      <div className="flex gap-[0.9375rem] items-center mb-3">
        <h4 className="font-bold text-main-orange tracking-wide">공지사항</h4>
        <NoticeCategory selected={selectedCategory} setSelected={setSeletedCategory} />
      </div>
      <NoticeListMain notices={noticesMock} />
    </section>
  );
}

const noticesMock: {
  createdAt: string;
  title: string;
  id: number;
}[] = [
  { createdAt: '2021-08-18', title: '이제 진짜 자야 된다', id: 4 },
  { createdAt: '2021-08-19', title: '지금 자면 5시간', id: 5 },
  { createdAt: '2021-08-20', title: '내일 영어논문 보려면 와... 진짜 싫다', id: 8 },
  { createdAt: '2021-08-23', title: '휴학하고 싶다', id: 62 },
  {
    createdAt: '2021-08-23',
    title: '살려줘요 긴 문장 말줄임 테스트ㅡㅡㅡㅡ으아아 왜 안 줄어',
    id: 496,
  },
  { createdAt: '2021-08-23', title: '로그잉ㄴ 언제 해', id: 45 },
];
