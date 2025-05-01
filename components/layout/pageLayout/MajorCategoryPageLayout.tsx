'use client';

import { useTranslations } from 'next-intl';

import HTMLViewer from '@/components/form/html/HTMLViewer';
import Header from '@/components/layout/header/Header';
import CategoryGrid from '@/components/layout/pageLayout/CategoryGrid';
import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';

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

  // TODO: messages.json에 번역 파일 추가
  title ||= t(currentPage.name);

  return (
    <div className="bg-neutral-850">
      <Header />
      <div className="max-w-[80rem] px-5 py-8 sm:px-[6.25rem] sm:pb-[4.5rem] sm:pt-12">
        <div className="text:sm mb-2 font-light text-neutral-500 sm:text-[20px]">{subtitle}</div>
        <div className="text-[32px] font-semibold tracking-wide text-white sm:text-[64px]">
          {title}
        </div>
        {description && (
          // 웹버전 description
          <HTMLViewer
            htmlContent={description}
            wrapperClassName="mb-6 mt-8 hidden sm:block"
            contentClassName="!text-[#f5f5f5] max-w-[960px]"
          />
        )}
      </div>
      <CategoryGrid currentPage={currentPage} theme="dark" />
      {description && (
        // 모바일 버전 description
        <div className="px-5 pb-14 pt-7 sm:hidden">
          <HTMLViewer
            htmlContent={description}
            contentClassName="!text-[#a3a3a3] font-light text-[13px]"
          />
        </div>
      )}
    </div>
  );
}
