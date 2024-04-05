import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import DownArrow from '@/public/image/main/down_arrow.svg';
import RightArrow from '@/public/image/main/right_arrow.svg';

import { getMain } from '@/apis/main';

import Header from '@/components/layout/header/Header';
import NewsSection from '@/components/main/NewsSection';
import NoticeSection from '@/components/main/NoticeSection';

import { MainImportant, MainNews } from '@/types/main';

import { formatMainNewsDateStr } from '@/utils/date';
import { getPath } from '@/utils/page';
import {
  faculty,
  facultyRecruitment,
  graduateScholarship,
  topConferenceList,
  undergraduateScholarship,
} from '@/utils/segmentNode';

const NEWS_CARD_WIDTH_REM = 13.8;

export default async function MainPage() {
  const data = await getMain();

  return (
    <>
      <Header />
      <MainSection />
      <NewsSection>
        {data.slides.map((news) => (
          <NewsCard news={news} key={news.id} />
        ))}
      </NewsSection>
      <ImportantSection importantList={data.importants} />
      <NoticeSection allMainNotice={data.notices} />
      <LinkSection />
    </>
  );
}

const MainSection = () => (
  // 헤더 높이 빼기
  <div className="relative flex h-[calc(95vh-147px)] justify-center">
    <DownArrow className="absolute bottom-[5rem] animate-arrowBounce " />
  </div>
);

const NewsCard = ({ news }: { news: MainNews }) => (
  <Link
    href={`/community/news/${news.id}`}
    style={{ width: `${NEWS_CARD_WIDTH_REM}rem` }}
    className="flex h-[19rem] shrink-0 flex-col bg-neutral-50 shadow-[0_0_31.9px_0_rgba(0,0,0,0.07)]"
  >
    <div className="relative h-[6.25rem] w-full">
      <Image src={news.imageURL} fill alt="" className="object-cover" />
    </div>

    <div className="px-[0.87rem] pt-[0.88rem]">
      <h3 className="line-clamp-2 text-[0.9375rem] font-semibold text-neutral-900">{news.title}</h3>
      <time className="mt-3 block text-sm font-normal text-neutral-500">
        {formatMainNewsDateStr(news.createdAt)}
      </time>
      <p className="mt-3 line-clamp-4 text-sm font-normal leading-[150%] text-neutral-500">
        {news.description}
      </p>
    </div>
  </Link>
);

const ImportantSection = ({ importantList }: { importantList: MainImportant[] }) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:mx-[7.5rem] sm:mt-[4.06rem] sm:grid-cols-2 sm:gap-7">
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
      stroke-width="1.5"
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
