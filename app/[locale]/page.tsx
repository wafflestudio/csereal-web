import Link from 'next/link';
import { ReactNode } from 'react';

import RightArrow from '@/public/image/main/right_arrow.svg';

import { getMain } from '@/apis/main';

import Header from '@/components/layout/header/Header';
import GraphicSection from '@/components/main/GraphicSection';
import NewsSection from '@/components/main/NewsSection';
import NoticeSection from '@/components/main/NoticeSection';

import { MainImportant } from '@/types/main';

import { getPath } from '@/utils/page';
import {
  faculty,
  facultyRecruitment,
  graduateScholarship,
  topConferenceList,
  undergraduateScholarship,
} from '@/utils/segmentNode';

export default async function MainPage() {
  const data = await getMain();

  return (
    <div className="sm:min-w-[1024px]">
      <Header />
      <GraphicSection />
      <NewsSection mainNews={data.slides} />
      <ImportantSection importantList={data.importants} />
      <NoticeSection allMainNotice={data.notices} />
      <LinkSection />
    </div>
  );
}

const ImportantSection = ({ importantList }: { importantList: MainImportant[] }) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-8 sm:mx-[7.5rem] sm:mt-[4.0625rem] sm:grid-cols-2 sm:gap-7">
      {importantList.map((important) => {
        const href = `community/${important.category}/${important.id}`;

        return (
          <Link
            key={important.id}
            href={href}
            className="relative flex h-[7.5rem] flex-col gap-[0.62rem] bg-[#E65817] px-[1.75rem] pt-[1.63rem]"
          >
            <h3 className="line-clamp-1 text-lg font-semibold text-neutral-950">
              {important.title}
            </h3>
            <p className="line-clamp-1 text-sm font-normal text-neutral-800">
              {important.description}
            </p>
            <ImportantSectionArrow />
          </Link>
        );
      })}
    </div>
  );
};

const ImportantSectionArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    className="absolute bottom-[0.87rem] right-[0.87rem]"
  >
    <path
      d="M14.0076 5L23 13.9924M23 13.9924L14.0076 23M23 13.9924L5 13.9924"
      stroke="#0A0A0A"
      strokeWidth="1.5"
    />
  </svg>
);

const LinkSection = () => {
  return (
    <div className="mx-[7.81rem] mb-[25rem] mt-[8.69rem] flex gap-[8rem]">
      <div className="flex flex-1 flex-col gap-8">
        <h3 className="text-2xl font-medium text-white">바로가기</h3>
        <div className="flex flex-col">
          <LinkWithArrow href={getPath(topConferenceList)}>Top Conference List</LinkWithArrow>
          <LinkWithArrow href={getPath(facultyRecruitment)}>신임교수초빙</LinkWithArrow>
          <LinkWithArrow href={getPath(faculty)}>구성원</LinkWithArrow>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-8">
        <h3 className="text-2xl font-medium text-white">장학제도</h3>
        <div className="flex flex-col">
          <LinkWithArrow href={getPath(graduateScholarship)}>대학원</LinkWithArrow>
          <LinkWithArrow href={getPath(undergraduateScholarship)}>학부</LinkWithArrow>
        </div>
      </div>
    </div>
  );
};

const LinkWithArrow = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link
      href={href}
      className="flex h-16 items-center justify-between border-l-[5px] border-[#E65817] pl-9 text-lg font-semibold text-white"
    >
      {children}
      <RightArrow />
    </Link>
  );
};
