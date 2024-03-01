'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import HTMLViewer from '@/components/editor/HTMLViewer';

import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

import { getPath } from '@/utils/page';

import ENG_NAMES from '../../../messages/en.json';
import Header from '../header/Header';

interface GuidePageLayoutProps {
  title?: string;
  subtitle?: string;
  description?: string;
  twoDimensional?: boolean;
}

export default function MajorCategoryPageLayout({
  title,
  subtitle = '',
  description = '',
  twoDimensional = false,
}: GuidePageLayoutProps) {
  const t = useTranslations('Nav');
  const currentPage = useCurrentSegmentNode();
  title ||= t(currentPage.name);
  const [selectedCategory, setSelectedCategory] = useState(
    twoDimensional ? currentPage.children?.[0] ?? null : null,
  );
  const router = useRouter();

  return (
    <div className="bg-neutral-850">
      <Header />
      <div className="max-w-[80rem] px-5 py-8 sm:pt-12 sm:pb-[4.5rem] sm:px-[6.25rem]">
        <div className="text-neutral-500 text:sm sm:text-[20px] font-light">{subtitle}</div>
        <div className="text-white text-[32px] sm:text-[64px] font-semibold tracking-wide">
          {title}
        </div>
        {description && (
          <HTMLViewer htmlContent={description} style={{ color: '#f5f5f5' }} margin="mt-8 mb-6" />
        )}
      </div>
      <div className="bg-neutral-900 pt-20  pb-[11.25rem] px-[6.25rem]">
        <div className="grid gap-10 grid-cols-[repeat(auto-fill,_300px)] mb-10">
          {currentPage.children!.map((subpage, index) => (
            <RootItem
              key={index}
              title={subpage.name}
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
          <div className="grid gap-10 grid-cols-[repeat(auto-fill,_300px)] mb-10">
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
    </div>
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
      className={`w-[300px] h-[160px] ${bgColor} px-7 py-6 ${hoverBgColor} flex flex-col justify-between cursor-pointer`}
      onClick={onClick}
    >
      <div>
        <h3 className="text-neutral-800 text-[20px] font-medium mb-2.5">{title}</h3>
        <p className="text-neutral-800">
          {ENG_NAMES.Nav[title as keyof typeof ENG_NAMES.Nav] ?? ''}
        </p>
      </div>
      {hasArrow && (
        <div className="text-end">
          <span className="material-symbols-outlined font-extralight text-[32px] text-neutral-800">
            arrow_forward
          </span>
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
