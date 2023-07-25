import PageTitle from '@/components/common/PageTitle';
import Sidebar from '@/components/common/Sidebar';

import { Location, PAGES, TABS, notice } from '@/types/common';

export default function NoticePage() {
  const subTabs: Location[] = TABS.community;

  return (
    <>
      <PageTitle currentPage={notice}>
        <h3 className="text-lg font-bold break-keep font-yoon">
          푸른등대 2023gkrsuseh 2학기 학위논문제출기한 단순연장 학위논문제출기한
        </h3>
      </PageTitle>
      <div className="flex">
        <div className="border w-[500px] h-[300px] mr-[30px]"></div>
        <Sidebar mainTab={PAGES.community} currentTab={PAGES.notice} subTabs={subTabs} />
      </div>
    </>
  );
}
