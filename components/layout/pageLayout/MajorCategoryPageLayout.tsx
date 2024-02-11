'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import HTMLViewer from '@/components/editor/HTMLViewer';

import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

import { getPath } from '@/utils/page';

import Header from '../header/Header';

interface GuidePageLayoutProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function MajorCategoryPageLayout({
  title,
  subtitle = '',
  description = '',
}: GuidePageLayoutProps) {
  const t = useTranslations('Nav');
  const currentPage = useCurrentSegmentNode();
  title ||= t(currentPage.name);

  return (
    <div className="bg-neutral-850">
      <Header />
      <div className="max-w-[80rem] pt-12 pb-[4.5rem] px-[6.25rem]">
        <div className="text-neutral-500 text-[20px] font-light">{subtitle}</div>
        <div className="text-white text-[64px] font-semibold tracking-wide mb-8">{title}</div>
        <HTMLViewer htmlContent={description} style={{ color: '#f5f5f5' }} />
      </div>
      <div className="bg-neutral-900 pt-20 pb-[13.75rem] px-[6.25rem]">
        <div className="grid gap-10 grid-cols-[repeat(auto-fill,_300px)]">
          {currentPage.children!.map((subpage, index) => (
            <DetailItem
              key={index}
              title={subpage.name}
              description={subpage.description ?? ''}
              href={getPath(subpage)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface DetailItemProps {
  title: string;
  description: string;
  href: string;
}

function DetailItem({ title, description, href }: DetailItemProps) {
  return (
    <Link href={href}>
      <div className="w-[300px] h-[160px] bg-neutral-100 px-7 py-6 hover:bg-main-orange-dark flex flex-col justify-between">
        <div>
          <h3 className="text-neutral-800 text-[20px] font-medium mb-[16px]">{title}</h3>
          <p className="text-neutral-800 text-[16px]">{description}</p>
        </div>
        <div className="text-end">
          <span className="material-symbols-outlined font-extralight text-[32px] text-neutral-800">
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  );
}
