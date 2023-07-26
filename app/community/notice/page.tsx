import PageTitle from '@/components/common/PageTitle';
import Sidebar from '@/components/common/Sidebar';

import { academics, notice } from '@/types/page';

export default function NoticePage() {
  return (
    <>
      <PageTitle currentPage={notice}>
        <h3 className="text-2xl font-bold break-keep font-yoon">공지사항</h3>
      </PageTitle>
      <div className="flex">
        <div className="border w-[500px] h-[300px] mr-[30px]"></div>
        <Sidebar currentTab={notice} />
      </div>
    </>
  );
}
