import PageTitle from '@/components/common/PageTitle';
import Sidebar from '@/components/common/Sidebar';
import Tags from '@/components/common/Tags';

import { notice } from '@/types/page';

export default function NoticePostPage() {
  const tags = ['입학', '졸업'];

  return (
    <>
      <PageTitle currentPage={notice}>
        <h3 className="text-lg font-bold break-keep font-yoon">공지사항</h3>
      </PageTitle>
      <div>
        <div className="border w-[500px] h-[300px] mr-[30px]"></div>
        <Tags tags={tags} page={notice} />
      </div>
      <Sidebar currentTab={notice} />
    </>
  );
}
