'use client';

import { useTranslations } from 'next-intl';
import React, { ReactNode } from 'react';

import PageTitleOld from '@/components/layout/pageLayout/PageTitleOld';
import SubNavbar from '@/components/layout/pageLayout/SubNavbar';

import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

import PageTitle from './PageTitle';

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
    <div className="relative">
      <PageTitle
        title={title}
        currentPage={currentPage}
        titleType={titleType}
        margin={titleMargin ?? ''}
      />
      <div className="row-start-2 col-start-1 bg-[#ffffff]">{children}</div>
      <SubNavbar currentTab={currentPage} />
    </div>
  );
}
