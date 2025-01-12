'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { type JSX, ReactNode } from 'react';

import SubNavbar from '@/components/layout/pageLayout/SubNavbar';
import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';

import Header from '../header/Header';
import PageTitle from './PageTitle';

interface PageLayoutProps {
  title?: string | JSX.Element;
  titleType: 'big' | 'small';
  titleMargin?: string; // tailwind class

  removeTopPadding?: boolean;
  removeBottomPadding?: boolean;
  removePadding?: boolean;

  hideNavbar?: boolean;
  children: ReactNode;
}

export const PAGE_PADDING_LEFT_PX = 100;
export const PAGE_PADDING_RIGHT_PX = 360;
export const PAGE_PADDING_TOP_PX = 44;
export const PAGE_PADDING_BOTTOM_TAILWIND = '150px';

/**
 * 본문 기본 스타일
 * padding-left: 100px
 * padding-right: 360px (서브내비 자리까지 확보)
 * padding-top: 44px
 * padding-bottom: 150px
 * background-color: white
 */

export default function PageLayout({
  title,
  titleType,
  titleMargin = 'mb-6 sm:mb-11',
  removePadding,
  removeTopPadding,
  removeBottomPadding,
  hideNavbar = false,
  children,
}: PageLayoutProps) {
  const t = useTranslations('Nav');
  const currentPage = useCurrentSegmentNode();
  title ||= t(currentPage.name);

  return (
    <div className="flex grow flex-col bg-neutral-900">
      <Header />
      <PageTitle
        title={title}
        currentPage={currentPage}
        titleType={titleType}
        margin={titleMargin}
      />
      <div
        className={clsx('relative grow bg-white sm:p-[2.75rem_360px_150px_100px]', {
          'p-0': removePadding,
          'pt-0': removeTopPadding,
          'pb-0': removeBottomPadding,
          'p-[1.75rem_1.25rem_4rem_1.25rem]':
            !removePadding && !removeTopPadding && !removeBottomPadding,
        })}
      >
        {children}
        {!hideNavbar && <SubNavbar currentTab={currentPage} />}
      </div>
    </div>
  );
}
