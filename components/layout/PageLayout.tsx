import React, { ReactNode } from 'react';

import PageTitle from '@/components/common/PageTitle';
import Sidebar from '@/components/common/Sidebar';

import { SegmentNode } from '@/types/page';

interface PageLayoutProps {
  currentPage: SegmentNode;
  title: string;
  titleSize: 'text-lg' | 'text-2xl';
  titleMargin: string;
  children: ReactNode;
}

export default function PageLayout({
  currentPage,
  title,
  titleSize,
  titleMargin,
  children,
}: PageLayoutProps) {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] px-[60px]">
      <PageTitle
        title={title}
        currentPage={currentPage}
        textSize={titleSize}
        margin={titleMargin}
      />
      <div className="w-[840px] row-start-2 col-start-1">{children}</div>
      <Sidebar currentTab={currentPage} />
    </div>
  );
}
