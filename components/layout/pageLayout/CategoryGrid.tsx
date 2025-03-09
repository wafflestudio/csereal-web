'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { SegmentNode } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { getPath } from '@/utils/page';

import ENG_NAMES from '../../../messages/en.json';

// TODO: RootItem을 클릭했을 때 LeafItem이 보이도록 자동 스크롤
export default function CategoryGrid({
  currentPage,
  theme,
}: {
  currentPage: SegmentNode;
  theme: 'light' | 'dark';
}) {
  const t = useTranslations('Nav');

  // 학사 및 교과 등에서 소분류 선택 처리용 state
  const [selectedCategory, setSelectedCategory] = useState<SegmentNode | null>(null);
  const router = useRouter();

  return (
    <div
      className={`${theme === 'light' ? 'bg-white' : 'bg-neutral-900'} px-5 py-7 sm:px-[6.25rem] sm:pb-[11.25rem] sm:pt-20`}
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
            isLight={theme === 'light'}
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
  );
}

interface RootItemProps {
  title: string;
  isPage: boolean;
  isSelected?: boolean;
  onClick: () => void;
  isLight?: boolean;
}

function RootItem({ title, isPage, isSelected, isLight, onClick }: RootItemProps) {
  const bgColor = isSelected ? 'bg-main-orange-dark' : isLight ? 'bg-neutral-50' : 'bg-neutral-100';

  return (
    <DetailItem
      title={title}
      onClick={onClick}
      hasArrow={isPage}
      bgColor={bgColor}
      hoverColor={isLight ? 'bg-neutral-200' : 'bg-main-orange-dark'}
      borderColor={isLight ? 'border-neutral-200' : undefined}
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
  borderColor?: string;
  onClick: () => void;
}

function DetailItem({
  title,
  hasArrow,
  bgColor,
  hoverColor,
  borderColor,
  onClick,
}: DetailItemProps) {
  const hoverBgColor = hoverColor ? `hover:${hoverColor}` : 'hover:bg-main-orange-dark';

  return (
    <div
      className={`group h-[96px] sm:h-[160px] ${bgColor} ${borderColor && `border ${borderColor}`} px-[14px] py-[13px] sm:px-7 sm:py-6 ${hoverBgColor} flex cursor-pointer flex-col justify-between duration-300`}
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
