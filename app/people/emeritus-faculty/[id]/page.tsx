'use client';
import Link from 'next/link';
import useSWR from 'swr';

import { useLanguage } from '@/contexts/LanguageContext';

import { getEmeritusFaculty, getEmeritusFacultyEng } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import PeopleImageWithAnimation from '@/components/people/PeopleImageWithAnimation';
import PeopleInfoList from '@/components/people/PeopleInfoList';

export default function EmeritusFacultyMemberPage({ params }: { params: { id: number } }) {
  const { isEnglish } = useLanguage();
  const url = isEnglish
    ? `/eng/people/emeritus-faculty/${params.id}`
    : `/people/emeritus-faculty/${params.id}`;
  const fetchFunction = () =>
    isEnglish ? getEmeritusFacultyEng(params.id) : getEmeritusFaculty(params.id);
  const { data } = useSWR(url, fetchFunction);

  //   const startTime = `${data.startDate.getFullYear()}년 ${data.startDate.getMonth() + 1}월`;
  //   const endTime = `${data.endDate.getFullYear()}년 ${data.endDate.getMonth() + 1}월`;
  //   const careerTime = { startTime, endTime };
  const careerTime = { startTime: data?.startDate, endTime: data?.endDate };

  return (
    data && (
      <PageLayout
        title={
          <div className="flex flex-row items-end">
            <p>{data.name}</p>
            <p className="text-neutral-500 text-md font-normal ml-2 leading-7">
              {data.academicRank}
            </p>
          </div>
        }
        titleType="big"
        titleMargin="mb-9"
      >
        <div className="flow-root relative mb-10">
          <PeopleImageWithAnimation imageURL={data.imageURL} />
          <div className="break-all">
            {(data.office || data.email || data.website) && (
              <article className="text-neutral-700 font-noto flex flex-col mb-7">
                <>
                  <h3 className="text-base font-bold leading-8">
                    {isEnglish ? 'Contact Info' : '연락처 정보'}
                  </h3>
                  <ul className="list-inside list-disc">
                    {data.office && (
                      <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                        <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                        <p>
                          {isEnglish ? 'Office' : '교수실'}: {data.office}
                        </p>
                      </li>
                    )}
                    {data.email && (
                      <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                        <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                        <p>
                          {isEnglish ? 'Email' : '이메일'}:
                          <Link
                            className="ml-1 text-link hover:underline"
                            href={`mailto:${data.email}`}
                          >
                            {data.email}
                          </Link>
                        </p>
                      </li>
                    )}
                    {data.website && (
                      <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                        <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                        <p>
                          {isEnglish ? 'Website' : '웹사이트'}:
                          <Link className="ml-1 text-link hover:underline" href={`${data.website}`}>
                            {data.website}
                          </Link>
                        </p>
                      </li>
                    )}
                  </ul>
                </>
              </article>
            )}
            {data.educations && (
              <PeopleInfoList
                title={isEnglish ? 'Educations' : '학력'}
                infoList={data.educations}
              />
            )}
            {data.researchAreas && (
              <PeopleInfoList
                title={isEnglish ? 'Research Areas' : '연구 분야'}
                infoList={data.researchAreas}
              />
            )}
            <div className="mb-7 font-noto font-medium text-sm text-neutral-700">
              {isEnglish ? 'Team of Service' : '재직 기간'}: {careerTime.startTime} -{' '}
              {careerTime.endTime}
            </div>
          </div>
        </div>
      </PageLayout>
    )
  );
}
