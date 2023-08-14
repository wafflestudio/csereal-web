'use client';

import React, { ReactNode } from 'react';

import { useNavbarContext } from '@/contexts/NavbarContext';

import PageTitle from '@/components/common/PageTitle';
import SubNavbar from '@/components/layout/SubNavbar';

import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

interface PageLayoutProps {
  title?: string;
  titleSize: 'text-lg' | 'text-2xl';
  titleWeight?: 'font-bold' | 'font-medium';
  children: ReactNode;
}

export default function PageLayout({ title, titleSize, titleWeight, children }: PageLayoutProps) {
  const currentPage = useCurrentSegmentNode();
  const { navbarState } = useNavbarContext();

  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-auto mx-[3.75rem] gap-x-10 justify-center">
      <PageTitle
        title={title ?? currentPage.name}
        currentPage={currentPage}
        textSize={titleSize}
        fontWeight={titleWeight}
      />
      <div className="w-[52.5rem] row-start-2 col-start-1">{children}</div>
      {navbarState.type === 'closed' && <SubNavbar currentTab={currentPage} />}
    </div>
  );
}
