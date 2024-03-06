'use client';

import { useTranslations } from 'next-intl';
import React, { CSSProperties, ReactNode } from 'react';

import SubNavbar from '@/components/layout/pageLayout/SubNavbar';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';

import PageTitle from './PageTitle';
import Header from '../header/Header';

interface PageLayoutProps {
  title?: string | JSX.Element;
  titleType: 'big' | 'small';
  titleMargin?: string; // tailwind class
  bodyStyle?: CSSProperties;
  children: ReactNode;
}

export const PAGE_PADDING_LEFT_PX = 100;
export const PAGE_PADDING_RIGHT_PX = 340;
export const PAGE_PADDING_TOP_PX = 44;
export const PAGE_PADDING_BOTTOM_PX = 150;

/**
 * 본문 기본 스타일
 * padding-left: 100px
 * padding-right: 340px (서브내비 자리까지 확보)
 * padding-top: 44px
 * padding-bottom: 150px
 * background-color: white
 */

export default function PageLayout({
  title,
  titleType,
  titleMargin = 'mb-6 sm:mb-11',
  bodyStyle,
  children,
}: PageLayoutProps) {
  const t = useTranslations('Nav');
  const currentPage = useCurrentSegmentNode();
  title ||= t(currentPage.name);

  return (
    <div className="relative bg-neutral-900">
      <Header />
      <PageTitle
        title={title}
        currentPage={currentPage}
        titleType={titleType}
        margin={titleMargin}
      />
      <div
        className={
          'bg-white px-5 py-7 sm:pl-[100px] sm:pr-[340px] sm:pt-[44px] sm:pb-[150px] relative'
        }
        style={bodyStyle}
      >
        {children}
        <SubNavbar currentTab={currentPage} />
      </div>
    </div>
  );
}
