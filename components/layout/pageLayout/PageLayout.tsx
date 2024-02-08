'use client';

import { useTranslations } from 'next-intl';
import React, { ReactNode } from 'react';

import SubNavbar from '@/components/layout/pageLayout/SubNavbar';

import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

import PageTitle from './PageTitle';

interface PageLayoutProps {
  title?: string | JSX.Element;
  titleType: 'big' | 'small';
  titleMargin: string; // tailwind class
  children: ReactNode;
}

/**
 * 패딩 일괄 적용이 불가해서 각 페이지별로 직접 패딩 넣어줘야 합니다.
 * padding-left: 100px
 * padding-right: 350px (서브내비 자리까지 확보)
 */

export default function PageLayout({ title, titleType, titleMargin, children }: PageLayoutProps) {
  const t = useTranslations('Nav');
  const currentPage = useCurrentSegmentNode();
  title ||= t(currentPage.name);

  return (
    <div className="relative bg-neutral-900">
      <PageTitle
        title={title}
        currentPage={currentPage}
        titleType={titleType}
        margin={titleMargin ?? ''}
      />
      <div className="row-start-2 col-start-1 bg-white">{children}</div>
      <SubNavbar currentTab={currentPage} />
    </div>
  );
}
