'use client';

import React, { ReactNode } from 'react';

import { useNavbarContext } from '@/contexts/NavbarContext';

import PageTitle from '@/components/layout/pageLayout/PageTitle';
import SubNavbar from '@/components/layout/pageLayout/SubNavbar';

import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

interface PageLayoutProps {
  title?: string;
  titleType: 'big' | 'small';
  marginBottom?: string; // tailwind class
  children: ReactNode;
}

export default function PageLayout({ title, titleType, marginBottom, children }: PageLayoutProps) {
  const currentPage = useCurrentSegmentNode();
  title ||= currentPage.name;
  const { navbarState } = useNavbarContext();

  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-auto mx-[3.75rem] gap-x-10 justify-center">
      <PageTitle
        title={title}
        currentPage={currentPage}
        titleType={titleType}
        marginBottom={marginBottom ?? ''}
      />
      <div className="w-[52.5rem] row-start-2 col-start-1">{children}</div>
      {navbarState.type === 'closed' && <SubNavbar currentTab={currentPage} />}
    </div>
  );
}
