'use client';

import { useTranslations } from 'next-intl';
import React, { CSSProperties, ReactNode } from 'react';

import SubNavbar from '@/components/layout/pageLayout/SubNavbar';

import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

import PageTitle from './PageTitle';

interface PageLayoutProps {
  title?: string | JSX.Element;
  titleType: 'big' | 'small';
  titleMargin: string; // tailwind class
  bodyStyle?: CSSProperties;
  children: ReactNode;
}

/**
 * 본문 기본 스타일
 * padding-left: 100px
 * padding-right: 350px (서브내비 자리까지 확보)
 * padding-top: 44px
 * padding-bottom: 150px
 * background-color: white
 */

export default function PageLayout({
  title,
  titleType,
  titleMargin,
  bodyStyle,
  children,
}: PageLayoutProps) {
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
      <div className={'bg-white pl-[100px] pr-[350px] pt-[44px] pb-[150px]'} style={bodyStyle}>
        {children}
      </div>
      <SubNavbar currentTab={currentPage} />
    </div>
  );
}
