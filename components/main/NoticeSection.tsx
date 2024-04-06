'use client';

import Link from 'next/link';
import { ReactNode, useState } from 'react';

import Plus from '@/public/image/main/plus.svg';

import { AllMainNotice } from '@/types/main';

import { formatMainNoticeDateStr } from '@/utils/date';
import useResponsive from '@/utils/hooks/useResponsive';
import { getPath } from '@/utils/page';
import { notice } from '@/utils/segmentNode';

export default function NoticeSection({ allMainNotice }: { allMainNotice: AllMainNotice }) {
  const [tag, setTag] = useState<keyof AllMainNotice>('all');
  const { isMobile } = useResponsive();

  return (
    <div className="relative mt-16 bg-[#212121] sm:mx-[7.75rem] sm:mt-[5.5rem] sm:h-[28rem]">
      <div className="flex flex-col px-5 pb-[1.625rem] pt-12 sm:absolute sm:bottom-12 sm:right-12 sm:w-[33rem] sm:p-0">
        <h3 className="text-[1.75rem] font-semibold text-white">공지사항</h3>
        <div className="mt-6 flex items-center justify-between sm:mt-9">
          <div className="flex gap-[0.875rem]">
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
          {!isMobile && (
            <Link className="flex text-base font-normal text-[#E65817]" href={getPath(notice)}>
              <Plus /> 더보기
            </Link>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {allMainNotice[tag].map((notice) => (
            <Link
              key={notice.id}
              className="line-clamp-1 flex justify-between gap-2 text-md font-normal text-white sm:text-base"
              href={`/community/notice/${notice.id}`}
            >
              <h3 className="truncate sm:w-[27rem]">{notice.title}</h3>
              <p className="whitespace-nowrap">{formatMainNoticeDateStr(notice.createdAt)}</p>
            </Link>
          ))}
        </div>
        {isMobile && (
          <Link
            className="ml-auto mt-6 flex text-base font-normal text-[#E65817]"
            href={getPath(notice)}
          >
            <Plus /> 더보기
          </Link>
        )}
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
