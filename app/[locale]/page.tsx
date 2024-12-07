import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { getMain } from '@/apis/v1';
import GraphicSection from '@/app/[locale]/components/GraphicSection';
import NewsSection from '@/app/[locale]/components/NewsSection';
import NoticeSection from '@/app/[locale]/components/NoticeSection';
import Header from '@/components/layout/header/Header';
import {
  degree,
  faculty,
  facultyRecruitment,
  generalStudies,
  topConferenceList,
} from '@/constants/segmentNode';
import { Link } from '@/i18n/routing';
import { MainImportant } from '@/types/main';
import { getPath } from '@/utils/page';

export default async function MainPage() {
  const data = await getMain();

  return (
    <div className="relative w-full">
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
      {importantList.map((important) => (
        <ImportantBanner key={important.id} important={important} />
      ))}
      <CharityBanner />
    </div>
  );
};

const ImportantBanner = ({ important }: { important: MainImportant }) => (
  <Link
    href={`community/${important.category}/${important.id}`}
    className="relative flex h-[7.5rem] flex-col gap-[0.62rem] bg-[#E65817] px-[1.75rem] pt-[1.63rem]"
  >
    <h3 className="line-clamp-1 text-lg font-semibold text-neutral-950">{important.title}</h3>
    <p className="mr-[24px] line-clamp-1 text-sm font-normal text-neutral-800">
      {important.description}
    </p>
    <ImportantSectionArrow />
  </Link>
);

const CharityBanner = () => (
  <Link
    href="https://computingcommons.snu.ac.kr/"
    className="relative flex h-[7.5rem] flex-col gap-[0.62rem] bg-[url(/image/main/charity.png)] bg-cover px-[1.75rem] pt-[1.63rem]"
  >
    <h3 className="line-clamp-1 text-lg font-semibold text-neutral-950">
      SNU Computing Commons 건축기금 모금
    </h3>
    <p className="line-clamp-1 text-sm font-normal text-neutral-800">
      서울대학교 발전재단 X 컴퓨터공학부
    </p>
    <ImportantSectionArrow />
  </Link>
);

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

const LinkSection = async () => {
  const t = await getTranslations('Nav');

  return (
    <div className="mx-6 mb-[7rem] mt-[60px] flex flex-col gap-[4rem] sm:mx-[7.81rem] sm:mb-[12rem] sm:mt-[90px] sm:flex-row sm:gap-[8rem]">
      <div className="flex flex-1 flex-col gap-[1.37rem] sm:gap-9">
        <h3 className="text-md font-medium text-neutral-400 sm:text-[1.3125rem]">
          {t('바로가기')}
        </h3>
        <div className="flex flex-col gap-5">
          <LinkWithArrow href={getPath(topConferenceList)} title="Top Conference List" />
          <LinkWithArrow
            href={getPath(facultyRecruitment)}
            title="신임교수초빙"
            subtitle="Faculty Recruitment"
          />
          <LinkWithArrow href={getPath(faculty)} title="구성원" subtitle="Faculty" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-[1.37rem] sm:gap-9">
        <h3 className="text-md font-medium text-neutral-400 sm:text-[1.3125rem]">{t('학부')}</h3>
        <div className="flex flex-col gap-5">
          <LinkWithArrow
            href={getPath(generalStudies)}
            title="필수 교양 과목"
            subtitle="General Studies Requirements"
          />
          <LinkWithArrow href={getPath(degree)} title="졸업 규정" subtitle="Degree Requirements" />
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
      <span className="material-symbols-outlined pt-0.5 text-[30px] font-extralight text-white duration-300 group-hover:translate-x-[10px] group-hover:font-light group-hover:text-main-orange">
        arrow_forward
      </span>
    </Link>
  );
};
