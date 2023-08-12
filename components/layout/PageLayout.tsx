import React, { ReactNode } from 'react';

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
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-auto mx-[3.75rem] gap-x-10 justify-center">
      <PageTitle title={title} currentPage={currentPage} textSize={titleSize} />
      <div className="w-[52.5rem] row-start-2 col-start-1 text-neutral-700">{children}</div>
      {/* TODO: 메인 내비 펼주내로 바뀌면 서브내비는 랜더링 X */}
      <SubNavbar currentTab={currentPage} />
    </div>
  );
}
