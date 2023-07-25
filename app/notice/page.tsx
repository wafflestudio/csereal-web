import Filter from '@/components/common/Filter';
import PageTitle from '@/components/common/PageTitle';
import SearchBar from '@/components/common/SearchBar';
import Sidebar from '@/components/common/Sidebar';

import { Location, PAGES, TABS } from '@/types/common';

export default function NoticePage() {
  const locationLog: Location[] = [PAGES.community, PAGES.notice];
  const subTabs: Location[] = TABS.community;

  return (
    <>
      <PageTitle locationLog={locationLog}>
        <h3 className="text-lg font-bold break-keep font-yoon">공지사항</h3>
      </PageTitle>
      <div className="flex">
        <div>
          <Filter />
          <SearchBar />
        </div>
        <Sidebar mainTab={PAGES.community} currentTab={PAGES.notice} subTabs={subTabs} />
      </div>
    </>
  );
}
