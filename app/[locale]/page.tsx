import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import DownArrow from '@/public/image/main/down_arrow.svg';
import RightArrow from '@/public/image/main/right_arrow.svg';

import { getMain } from '@/apis/main';

import Header from '@/components/layout/header/Header';
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

export default async function MainPage() {
  const data = await getMain();

  return (
    <>
      <Header />
      <MainSection />
      <NewsSection newsList={data.slides} />
      <ImportantSection importantList={data.importants} />
      <NoticeSection notice={data.notices} />
      <LinkSection />
    </>
  );
}

const MainSection = () => (
  // 헤더 높이 빼기
  <div className="relative h-[calc(95vh-147px)]">
    <DownArrow className="absolute bottom-[5rem] left-[50%] -translate-x-[50%] animate-arrowBounce" />
  </div>
);

const NewsSection = ({ newsList }: { newsList: MainNews[] }) => {
  return (
    <div className="bg-neutral-100 pb-[2.5rem] pt-[5rem]">
      <div className="no-scrollbar flex justify-center gap-8">
        {newsList.slice(0, 4).map((news) => (
          <NewsCard news={news} key={news.id} />
        ))}
      </div>
    </div>
  );
};

const NewsCard = ({ news }: { news: MainNews }) => (
  <Link
    href={`/community/news/${news.id}`}
    className="flex h-[17.3rem] w-[13.8rem] flex-col bg-neutral-50 shadow-[0_0_31.9px_0_rgba(0,0,0,0.07)] "
  >
    <div className="relative h-[6.25rem] w-full">
      <Image src={news.imageURL} fill alt="" className="object-cover" />
    </div>

    <div className="px-[0.87rem] pt-[0.88rem]">
      <h3 className="line-clamp-1 text-[0.9375rem] font-semibold text-neutral-900">{news.title}</h3>
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
    <div className="mx-[7.5rem] mt-[4.06rem] flex gap-7">
      {importantList.map((important) => {
        const href = `community/${important.category}/${important.id}`;

        return (
          <Link
            key={important.id}
            href={href}
            className="relative flex h-[7.5rem] w-[50%] flex-col gap-[0.62rem] bg-[#E65817] px-[1.75rem] pt-[1.63rem]"
          >
            <h3 className="line-clamp-1 text-lg font-semibold text-neutral-950">
              {important.title}
            </h3>
            <p className="line-clamp-1 text-sm font-normal text-neutral-800">
              {important.description}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

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
