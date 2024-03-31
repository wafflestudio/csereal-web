'use client';

import Link from 'next/link';
import { ReactNode, useState } from 'react';

import Plus from '@/public/image/main/plus.svg';

import { AllMainNotice } from '@/types/main';

import { formatMainNoticeDateStr } from '@/utils/date';
import { getPath } from '@/utils/page';
import { notice } from '@/utils/segmentNode';

export default function NoticeSection({ allMainNotice }: { allMainNotice: AllMainNotice }) {
  const [tag, setTag] = useState<keyof AllMainNotice>('all');

  return (
    <div className="relative mx-[7.81rem] mt-[5.5rem] h-[28rem] bg-[#212121]">
      <div className="absolute bottom-12 right-12 flex w-[33rem] flex-col">
        <h3 className="text-[1.75rem] font-semibold text-white">공지사항</h3>
        <div className="mt-9 flex items-center justify-between">
          <div className="flex gap-[0.87rem]">
            <NoticeSectionButton selected={tag === 'all'} onClick={() => setTag('all')}>
              전체
            </NoticeSectionButton>
            <NoticeSectionButton
              selected={tag === 'scholarship'}
              onClick={() => setTag('scholarship')}
            >
              장학
            </NoticeSectionButton>
            <NoticeSectionButton
              selected={tag === 'undergraduate'}
              onClick={() => setTag('undergraduate')}
            >
              학부
            </NoticeSectionButton>
            <NoticeSectionButton selected={tag === 'graduate'} onClick={() => setTag('graduate')}>
              대학원
            </NoticeSectionButton>
          </div>
          <Link className="flex text-base font-normal text-[#E65817]" href={getPath(notice)}>
            <Plus /> 더보기
          </Link>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {allMainNotice[tag].map((notice) => (
            <Link
              key={notice.id}
              className="line-clamp-1 flex justify-between text-base font-normal text-white"
              href={`/community/notice/${notice.id}`}
            >
              <h3 className="w-[27rem] truncate">{notice.title}</h3>
              <p>{formatMainNoticeDateStr(notice.createdAt)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const NoticeSectionButton = ({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}) => {
  return (
    <button
      className={`rounded-[1.875rem] border border-solid border-[#E65817] px-3 py-[0.37rem] text-md ${
        selected ? 'bg-[#E65817] text-[#202020]' : 'bg-[#202020] text-[#E65817]'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
