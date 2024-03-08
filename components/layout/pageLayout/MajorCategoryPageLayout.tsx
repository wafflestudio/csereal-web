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

  title ||= t(currentPage.name);

  // 학사 및 교과 등에서 소분류 선택 처리용 state
  const [selectedCategory, setSelectedCategory] = useState<SegmentNode | null>(null);
  const router = useRouter();

  return (
    <div className="bg-neutral-850">
      <Header />
      <div className="max-w-[80rem] px-5 py-8 sm:pt-12 sm:pb-[4.5rem] sm:px-[6.25rem]">
        <div className="text-neutral-500 text:sm sm:text-[20px] font-light mb-2">{subtitle}</div>
        <div className="text-white text-[32px] sm:text-[64px] font-semibold tracking-wide">
          {title}
        </div>
        {description && (
          <HTMLViewer
            htmlContent={description}
            style={{ color: '#f5f5f5', maxWidth: 960 }}
            className="mt-8 mb-6 hidden sm:block"
          />
        )}
      </div>
      <div
        className={`bg-neutral-900 px-5 pt-7 ${
          !description && 'pb-16'
        } sm:pt-20 sm:pb-[11.25rem] sm:px-[6.25rem]`}
      >
        <div className="grid gap-9 sm:gap-9 grid-cols-[repeat(2,_1fr)] sm:grid-cols-[repeat(auto-fill,_300px)] mb-5 sm:mb-10">
          {currentPage.children!.map((subpage, index) => (
            <RootItem
              key={index}
              title={t(subpage.name)}
              description={subpage.description ?? ''}
              onClick={() =>
                subpage.isPage ? router.push(getPath(subpage)) : setSelectedCategory(subpage)
              }
              isSelected={selectedCategory == subpage}
              isPage={subpage.isPage}
            />
          ))}
        </div>

        {selectedCategory && !selectedCategory.isPage && (
          <div className="grid gap-5 sm:gap-10 grid-cols-[repeat(2,_1fr)] sm:grid-cols-[repeat(auto-fill,_300px)] sm:mb-10">
            {selectedCategory.children!.map((subpage, index) => (
              <LeafItem
                key={index}
                title={subpage.name}
                description={subpage.description ?? ''}
                onClick={() => router.push(getPath(subpage))}
              />
            ))}
          </div>
        )}
      </div>
      {description && (
        <div className="sm:hidden px-5 pt-6 pb-24">
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
  description: string;
  isPage: boolean;
  isSelected?: boolean;
  onClick: () => void;
}

function RootItem({ title, description, isPage, isSelected, onClick }: RootItemProps) {
  return (
    <DetailItem
      title={title}
      description={description}
      onClick={onClick}
      hasArrow={isPage}
      bgColor={isSelected ? 'bg-main-orange-dark' : 'bg-neutral-100'}
    />
  );
}
interface LeafItemProps {
  title: string;
  description: string;
  onClick: () => void;
}

function LeafItem({ title, description, onClick }: LeafItemProps) {
  return (
    <DetailItem
      title={title}
      description={description}
      onClick={onClick}
      hasArrow
      bgColor="bg-neutral-400"
      hoverColor="bg-neutral-500"
    />
  );
}

interface DetailItemProps {
  title: string;
  description: string;
  hasArrow: boolean;
  bgColor: string;
  hoverColor?: string;
  onClick: () => void;
}

function DetailItem({ title, hasArrow, bgColor, hoverColor, onClick }: DetailItemProps) {
  const hoverBgColor = hoverColor ? `hover:${hoverColor}` : 'hover:bg-main-orange-dark';
  return (
    <div
      className={`group h-[96px] sm:h-[160px] ${bgColor} px-[14px] py-[13px] sm:px-7 sm:py-6 ${hoverBgColor} flex flex-col justify-between cursor-pointer duration-300`}
      onClick={onClick}
    >
      <div>
        <h3 className="text-neutral-800 text-md sm:text-[20px] font-medium mb-[0.625rem] sm:mb-2.5">
          {title}
        </h3>
        <p className="text-neutral-800 text-[11px] sm:text-base">
          {ENG_NAMES.Nav[title as keyof typeof ENG_NAMES.Nav] ?? ''}
        </p>
      </div>
      {hasArrow && (
        <div className="text-end">
          <span className="material-symbols-outlined font-extralight text-[18px] sm:text-[32px] text-neutral-800 group-hover:translate-x-[10px] duration-300">
            arrow_forward
          </span>
        </div>
      )}
    </div>
  );
}
