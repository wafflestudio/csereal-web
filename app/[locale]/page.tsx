// import mainVideo from '@/public/video/main_video.mov';

import { getMainContents } from '@/apis/main';

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
      <section>
        <ShortCutBox title={topConferenceList.name} href={tclPath} />
        <ShortCutBox title={facultyRecruitment.name} href={facultyRecruitmentPath} />
        <ShortCutBox title={'학부 ' + notice.name} href={undergraduateNoticePath} />
      </section>
      <ImportantPosts posts={data.importants} />
      <Notices notices={data.notices} />
      <SlideScreen slides={data.slides} />
      <div className="w-full h-screen bg-neutral-200">
        <video
          id="background-video"
          loop
          autoPlay
          muted
          style={{
            // position: 'relative',
            width: '100%',
            height: '100%',
            // left: 0,
            // top: 0,
          }}
          src="../../public/video/main_video.mov"
        />
      </div>
    </div>
  );
}
