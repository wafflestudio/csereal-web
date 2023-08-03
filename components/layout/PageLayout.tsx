import React, { ReactNode } from 'react';

import PageTitle from '@/components/common/PageTitle';
import Sidebar from '@/components/common/Sidebar';

import { SegmentNode } from '@/types/page';

interface PageLayoutProps {
  currentPage: SegmentNode;
  title: string;
  titleSize: 'text-lg' | 'text-2xl';
  children: ReactNode;
}

export default function PageLayout({ currentPage, title, titleSize, children }: PageLayoutProps) {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-auto mx-[3.75rem] gap-x-10 justify-center">
      <PageTitle title={title} currentPage={currentPage} textSize={titleSize} />
      <div className="row-start-2 col-start-1">{children}</div>
      <Sidebar currentTab={currentPage} />
    </div>
  );
}
