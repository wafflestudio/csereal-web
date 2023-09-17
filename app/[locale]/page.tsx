import { getMainContents } from '@/apis/main';

import BgVideo from '@/components/main/BgVideo';
import ImportantPosts from '@/components/main/ImportantPosts';
import Notices from '@/components/main/Notices';
import ShortCuts from '@/components/main/ShortCuts';
import SlideScreen from '@/components/main/SlideScreen';

import { facultyRecruitment, notice, topConferenceList } from '@/types/page';

import { getPath } from '@/utils/page';

const tclPath = getPath(topConferenceList);
const facultyRecruitmentPath = getPath(facultyRecruitment);
const undergraduateNoticePath = getPath(notice) + '?tag=학부';

const shortCuts = [
  { title: topConferenceList.name, href: tclPath },
  { title: facultyRecruitment.name, href: facultyRecruitmentPath },
  { title: '학부 ' + notice.name, href: undergraduateNoticePath },
];

export default async function MainPage() {
  const data = await getMainContents();

  return (
    <div>
      <div className="relative flex justify-center h-[600px]">
        <ShortCuts shortCuts={shortCuts} />
        <BgVideo />
      </div>
      <div className="relative">
        <SlideScreen slides={data.slides} />
      </div>
      <div className="flex justify-center mt-[70px]">
        <ImportantPosts posts={data.importants} />
        <Notices notices={data.notices} />
      </div>
    </div>
  );
}
