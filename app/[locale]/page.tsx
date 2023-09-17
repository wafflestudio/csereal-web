// import mainVideo from '@/public/video/main_video.mov';
import mainVideo from '@/public/video/main_video_bg.mp4';

import { getMainContents } from '@/apis/main';

import BgVideo from '@/components/main/BgVideo';
import ImportantPosts from '@/components/main/ImportantPosts';
import Notices from '@/components/main/Notices';
import ShortCutBox from '@/components/main/ShortCutBox';
import SlideScreen from '@/components/main/SlideScreen';

import { facultyRecruitment, notice, topConferenceList } from '@/types/page';

import { getPath } from '@/utils/page';

const tclPath = getPath(topConferenceList);
const facultyRecruitmentPath = getPath(facultyRecruitment);
const undergraduateNoticePath = getPath(notice) + '?tag=학부';

export default async function MainPage() {
  const data = await getMainContents();

  return (
    <div>
      <BgVideo />
      <section>
        <ShortCutBox title={topConferenceList.name} href={tclPath} />
        <ShortCutBox title={facultyRecruitment.name} href={facultyRecruitmentPath} />
        <ShortCutBox title={'학부 ' + notice.name} href={undergraduateNoticePath} />
      </section>
      <ImportantPosts posts={data.importants} />
      <Notices notices={data.notices} />
      <SlideScreen slides={data.slides} />
    </div>
  );
}
