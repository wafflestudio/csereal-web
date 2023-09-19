import Image from 'next/image';

import MainNode1 from '@/public/image/main_1.svg';
import MainNode2 from '@/public/image/main_2.svg';
import MainNode3 from '@/public/image/main_3.svg';
import MainNode4 from '@/public/image/main_4.svg';
import MainNode5 from '@/public/image/main_5.svg';
import MainNode6 from '@/public/image/main_6.svg';
import MainNode7 from '@/public/image/main_7.svg';

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
  { title: facultyRecruitment.name, href: facultyRecruitmentPath },
  { title: topConferenceList.name, href: tclPath },
  { title: '학부 ' + notice.name, href: undergraduateNoticePath },
];

export default async function MainPage() {
  const data = await getMainContents();

  return (
    <div className="w-[1104px] relative mx-auto overflow-hidden border border-neutral-700">
      <BackgroundNode />
      <div className="relative flex justify-center h-[615px]">
        <ShortCuts shortCuts={shortCuts} />
        <BgVideo />
      </div>
      <div className="relative mt-[90px] pt-8">
        <SlideScreen slides={data.slides} />
      </div>
      <div className="flex justify-between mt-[67px]">
        <ImportantPosts posts={data.importants} />
        <Notices notices={data.notices} />
      </div>
    </div>
  );
}

function BackgroundNode() {
  return (
    <div className="absolute w-full">
      <MainNode1 className="absolute top-[-20px] left-[-10px]" />
      <MainNode2 className="absolute top-[-70px] right-0" />
      <MainNode3 className="absolute top-[497px] left-0" />
      <MainNode4 className="absolute top-[306px] right-[105.5px]" />
      <MainNode5 className="absolute top-[875px] left-[105px]" />
      <MainNode6 className="absolute top-[1082px] left-[-68px]" />
      <MainNode7 className="absolute top-[1200px] right-[-12px]" />
    </div>
  );
}
