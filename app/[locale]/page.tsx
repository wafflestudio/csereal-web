import ImportantPosts from '@/components/main/ImportantPosts';
import ShortCutBox from '@/components/main/ShortCutBox';

import { ImportantCategory } from '@/types/admin';
import { facultyRecruitment, notice, topConferenceList } from '@/types/page';

import { getPath } from '@/utils/page';

const tclPath = getPath(topConferenceList);
const facultyRecruitmentPath = getPath(facultyRecruitment);
const undergraduateNoticePath = getPath(notice) + '?tag=학부';

const posts: {
  category: ImportantCategory;
  id: number;
  title: string;
  summary: string;
}[] = [
  { category: 'news', title: '뉴스 타이틀', summary: '어쩌고 저쩌고', id: 1 },
  { category: 'notice', title: '공지스 타이틀', summary: '어쩌고 저쩌고', id: 4 },
];

export default function MainPage() {
  return (
    <div>
      <div>
        <ShortCutBox title={topConferenceList.name} href={tclPath} />
        <ShortCutBox title={facultyRecruitment.name} href={facultyRecruitmentPath} />
        <ShortCutBox title={'학부 ' + notice.name} href={undergraduateNoticePath} />
      </div>
      <ImportantPosts posts={posts} />
    </div>
  );
}
