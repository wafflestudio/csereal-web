'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import HTMLViewer from '@/components/editor/HTMLViewer';
import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import { getPath } from '@/utils/page';
import { SegmentNode } from '@/utils/segmentNode';

import ENG_NAMES from '../../../messages/en.json';
import Header from '../header/Header';

interface GuidePageLayoutProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

// TODO: RootItem을 클릭했을 때 LeafItem이 보이도록 자동 스크롤
export default function MajorCategoryPageLayout({
  title,
  subtitle = '',
  description = '',
}: GuidePageLayoutProps) {
  const t = useTranslations('Nav');
  const currentPage = useCurrentSegmentNode();

  // TODO: messages.json에 번역 파일 추가
  title ||= t(currentPage.name);

  // 학사 및 교과 등에서 소분류 선택 처리용 state
  const [selectedCategory, setSelectedCategory] = useState<SegmentNode | null>(null);
  const router = useRouter();

  return (
    <div className="bg-neutral-850">
      <Header />
      <div className="max-w-[80rem] px-5 py-8 sm:px-[6.25rem] sm:pb-[4.5rem] sm:pt-12">
        <div className="text:sm mb-2 font-light text-neutral-500 sm:text-[20px]">{subtitle}</div>
        <div className="text-[32px] font-semibold tracking-wide text-white sm:text-[64px]">
          {title}
        </div>
        {description && (
          <HTMLViewer
            htmlContent={description}
            style={{ color: '#f5f5f5', maxWidth: 960 }}
            className="mb-6 mt-8 hidden sm:block"
          />
        )}
      </div>
      <div
        className={`bg-neutral-900 px-5 pt-7 ${
          !description && 'pb-16'
        } sm:px-[6.25rem] sm:pb-[11.25rem] sm:pt-20`}
      >
        <div className="mb-5 grid grid-cols-[repeat(2,_1fr)] gap-9 sm:mb-10 sm:grid-cols-[repeat(auto-fill,_300px)] sm:gap-9">
          {currentPage.children!.map((subpage, index) => (
            <RootItem
              key={index}
              title={t(subpage.name)}
              onClick={() =>
                subpage.isPage ? router.push(getPath(subpage)) : setSelectedCategory(subpage)
              }
              isSelected={selectedCategory == subpage}
              isPage={subpage.isPage}
            />
          ))}
        </div>

        {selectedCategory && !selectedCategory.isPage && (
          <div className="grid grid-cols-[repeat(2,_1fr)] gap-5 sm:mb-10 sm:grid-cols-[repeat(auto-fill,_300px)] sm:gap-10">
            {selectedCategory.children!.map((subpage, index) => (
              <LeafItem
                key={index}
                title={subpage.name}
                onClick={() => router.push(getPath(subpage))}
              />
            ))}
          </div>
        )}
      </div>
      {description && (
        <div className="px-5 pb-24 pt-6 sm:hidden">
          <HTMLViewer
            htmlContent={description}
            style={{ color: '#a3a3a3', fontWeight: 300, fontSize: 13 }}
          />
        </div>
      )}
    </div>
  );
}

interface RootItemProps {
  title: string;
  isPage: boolean;
  isSelected?: boolean;
  onClick: () => void;
}

function RootItem({ title, isPage, isSelected, onClick }: RootItemProps) {
  return (
    <DetailItem
      title={title}
      onClick={onClick}
      hasArrow={isPage}
      bgColor={isSelected ? 'bg-main-orange-dark' : 'bg-neutral-100'}
    />
  );
}
interface LeafItemProps {
  title: string;
  onClick: () => void;
}

function LeafItem({ title, onClick }: LeafItemProps) {
  return (
    <DetailItem
      title={title}
      onClick={onClick}
      hasArrow
      bgColor="bg-neutral-400"
      hoverColor="bg-neutral-500"
    />
  );
}

interface DetailItemProps {
  title: string;
  hasArrow: boolean;
  bgColor: string;
  hoverColor?: string;
  onClick: () => void;
}

function DetailItem({ title, hasArrow, bgColor, hoverColor, onClick }: DetailItemProps) {
  const hoverBgColor = hoverColor ? `hover:${hoverColor}` : 'hover:bg-main-orange-dark';

  return (
    <div
      className={`group h-[96px] sm:h-[160px] ${bgColor} px-[14px] py-[13px] sm:px-7 sm:py-6 ${hoverBgColor} flex cursor-pointer flex-col justify-between duration-300`}
      onClick={onClick}
    >
      <div>
        <h3 className="mb-[0.625rem] text-md font-medium text-neutral-800 sm:mb-2.5 sm:text-[20px]">
          {title}
        </h3>
        <p className="text-[11px] text-neutral-800 sm:text-base">
          {ENG_NAMES.Nav[title as keyof typeof ENG_NAMES.Nav] ?? ''}
        </p>
      </div>
      {hasArrow && (
        <div className="text-end">
          <span className="material-symbols-outlined text-[18px] font-extralight text-neutral-800 duration-300 group-hover:translate-x-[10px] sm:text-[32px]">
            arrow_forward
          </span>
        </div>
      )}
    </div>
  );
}
