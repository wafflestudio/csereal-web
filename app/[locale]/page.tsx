import Image from 'next/image';
import Link from 'next/link';

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
    <div className="relative sm:min-w-[1024px]">
      <Header />
      <div className="absolute left-0 right-0 top-0 -z-50 hidden aspect-[1336/800] sm:block">
        {/* 자글자글해져서 unoptimized */}
        <Image src="/image/main/background.png" fill alt="" className="object-cover" unoptimized />
      </div>
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
    <div className="mx-6 mb-[7rem] mt-[60px] flex flex-col gap-[4rem] sm:mx-[7.81rem] sm:mb-[12rem] sm:mt-[90px] sm:flex-row sm:gap-[8rem]">
      <div className="flex flex-1 flex-col gap-[1.37rem] sm:gap-9">
        <h3 className="text-md font-medium text-neutral-400 sm:text-[1.3125rem]">바로가기</h3>
        <div className="flex flex-col gap-5">
          <LinkWithArrow href={getPath(topConferenceList)} title="Top Conference List" />
          <LinkWithArrow href={getPath(facultyRecruitment)} title="신임교수초빙" />
          <LinkWithArrow href={getPath(faculty)} title="구성원" subtitle="Faculty" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-[1.37rem] sm:gap-9">
        <h3 className="text-md font-medium text-neutral-400 sm:text-[1.3125rem]">장학제도</h3>
        <div className="flex flex-col gap-5">
          <LinkWithArrow
            href={getPath(undergraduateScholarship)}
            title="학부"
            subtitle="Undergraduate"
          />
          <LinkWithArrow href={getPath(graduateScholarship)} title="대학원" subtitle="Graduate" />
        </div>
      </div>
    </div>
  );
};

const LinkWithArrow = ({
  href,
  title,
  subtitle,
}: {
  href: string;
  title: string;
  subtitle?: string;
}) => {
  return (
    <Link
      href={href}
      className="group flex h-10 items-center justify-between border-l-[5px] border-[#E65817] pl-7 duration-300"
    >
      <div className="flex items-end gap-3 text-white group-hover:text-main-orange">
        <p className="text-base font-medium sm:text-lg sm:font-semibold">{title}</p>
        <p className="text-xs font-medium sm:font-semibold">{subtitle}</p>
      </div>
      <RightArrow />
    </Link>
  );
};

const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="duration-300 group-hover:translate-x-[10px] sm:h-[40px] sm:w-[40px]"
  >
    <path
      d="M12.011 4.28529L19.7188 11.9931M19.7188 11.9931L12.011 19.7139M19.7188 11.9931L4.29018 11.9931"
      stroke="white"
      strokeWidth="1.5"
      className="group-hover:fill-main-orange"
    />
  </svg>
);
