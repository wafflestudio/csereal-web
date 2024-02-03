'use client';

import { useTranslations } from 'next-intl';
import React, { ReactNode } from 'react';

import PageTitle from '@/components/layout/pageLayout/PageTitle';
import SubNavbar from '@/components/layout/pageLayout/SubNavbar';

import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

interface PageLayoutProps {
  title?: string | JSX.Element;
  titleType: 'big' | 'small';
  titleMargin: string; // tailwind class
  children: ReactNode;
}

export default function PageLayout({ title, titleType, titleMargin, children }: PageLayoutProps) {
  const t = useTranslations('Nav');
  const currentPage = useCurrentSegmentNode();
  title ||= t(currentPage.name);

  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-auto mx-[3.75rem] gap-x-10 justify-center">
      <PageTitle
        title={title}
        currentPage={currentPage}
        titleType={titleType}
        margin={titleMargin ?? ''}
      />
      <div className="w-[52.5rem] row-start-2 col-start-1">{children}</div>
      <SubNavbar currentTab={currentPage} />
    </div>
  );
}
