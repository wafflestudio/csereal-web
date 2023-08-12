import React, { ReactNode, useContext } from 'react';

import { NavbarContext } from '@/contexts/NavbarContext';

import PageTitle from '@/components/common/PageTitle';
import SubNavbar from '@/components/layout/SubNavbar';

import { SegmentNode } from '@/types/page';

interface PageLayoutProps {
  currentPage: SegmentNode;
  title: string;
  titleSize: 'text-lg' | 'text-2xl';
  children: ReactNode;
}

export default function PageLayout({ currentPage, title, titleSize, children }: PageLayoutProps) {
  const { navbarState } = useContext(NavbarContext);

  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-auto mx-[3.75rem] gap-x-10 justify-center">
      <PageTitle title={title} currentPage={currentPage} textSize={titleSize} />
      <div className="w-[52.5rem] row-start-2 col-start-1">{children}</div>
      {navbarState.type === 'closed' && <SubNavbar currentTab={currentPage} />}
    </div>
  );
}
