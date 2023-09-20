import MainNode1 from '@/public/image/main_1.svg';
import MainNode2 from '@/public/image/main_2.svg';
import MainNode3 from '@/public/image/main_3.svg';
import MainNode4 from '@/public/image/main_4.svg';
import MainNode5 from '@/public/image/main_5.svg';
import MainNode6 from '@/public/image/main_6.svg';
import MainNode7 from '@/public/image/main_7.svg';

import { getMainContents } from '@/apis/main';

import BgVideo from '@/components/main/BgVideo';
import MainPageContent from '@/components/main/MainPageContent';
import ShortCuts from '@/components/main/ShortCuts';

import { facultyRecruitment, notice, topConferenceList } from '@/types/page';

import { getPath } from '@/utils/page';

const tclPath = getPath(topConferenceList);
const facultyRecruitmentPath = getPath(facultyRecruitment);
const undergraduateNoticePath = getPath(notice) + '?tag=학부';

const shortCuts = [
  { title: facultyRecruitment.name, href: facultyRecruitmentPath },
  { title: topConferenceList.name, href: tclPath },
  { title: '학부 ' + notice.name, href: undergraduateNoticePath },
];

export default async function MainPage() {
  const data = await getMainContents();

  return (
    <div className="w-[1264px] h-[1236px] relative mx-auto overflow-hidden">
      <BgVideo />
      <BackgroundNode />
      <ShortCuts shortCuts={shortCuts} />
      {data && <MainPageContent data={data} />}
    </div>
  );
}

function BackgroundNode() {
  return (
    <div className="absolute w-full">
      <MainNode1 className="absolute top-0 left-[-10px]" />
      <MainNode2 className="absolute top-0 right-0" />
      <MainNode3 className="absolute top-[457px] left-0" />
      <MainNode4 className="absolute top-[266px] right-[188.5px]" />
      <MainNode5 className="absolute top-[835px] left-[186px]" />
      <MainNode6 className="absolute top-[1042px] left-0" />
      <MainNode7 className="absolute top-[1150px] right-1" />
    </div>
  );
}
