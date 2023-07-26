import PageTitle from '@/components/common/PageTitle';
import Sidebar from '@/components/common/Sidebar';

import { academics, notice } from '@/types/page';

export default function NoticePage() {
  return (
    <>
      <PageTitle currentPage={notice}>
        <h3 className="text-lg font-bold break-keep font-yoon">
          푸른등대 2023gkrsuseh 2학기 학위논문제출기한 단순연장 학위논문제출기한
        </h3>
      </PageTitle>
      <div className="flex">
        <div className="border w-[500px] h-[300px] mr-[30px]"></div>
        <Sidebar currentTab={academics} />
      </div>
    </>
  );
}
