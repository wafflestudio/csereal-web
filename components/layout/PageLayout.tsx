import React, { ReactNode } from 'react';

import PageTitle from '@/components/common/PageTitle';
import Sidebar from '@/components/common/Sidebar';

import { SegmentNode } from '@/types/page';

// pageTitle에 마진 말고 본문에 마진 넣는 걸로 바꿔야 함.
// (사이드바가 학부 소개 높이 끝에서 딱 시작하는데 이거 그리드로 짜서 돌려쓰려면)
interface PageLayoutProps {
  currentPage: SegmentNode;
  title: string;
  titleSize: 'text-lg' | 'text-2xl';
  titleGrid: string;
  titleContentGap: string;
  children: ReactNode;
}

export default function PageLayout({
  currentPage,
  title,
  titleSize,
  titleContentGap,
  titleGrid,
  children,
}: PageLayoutProps) {
  return (
    <div className="grid grid-cols-[auto_220px] grid-rows-[auto_auto_1fr] mx-[60px]">
      <PageTitle title={title} currentPage={currentPage} margin={titleGrid} textSize={titleSize} />
      <div className="row-start-2 row-end-4 col-start-1 mt-[36px] w-[840px]">{children}</div>
      <Sidebar currentTab={currentPage} margin="ml-[40px] row-start-2 col-start-2" />
    </div>
  );
}
