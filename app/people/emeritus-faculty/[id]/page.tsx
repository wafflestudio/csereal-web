'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { getMockEmeritusFaculty } from '@/apis/faculty';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import PeopleImageWithAnimation from '@/components/people/PeopleImageWithAnimation';
import PeopleInfoList from '@/components/people/PeopleInfoList';

export default function EmeritusFacultyMemberPage() {
  const id = parseInt(useParams().id);

  const [careerTime, setCareerTime] = useState({ startTime: '', endTime: '' });

  const { data, isLoading, error } = useSWR([id], getMockEmeritusFaculty);

  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    if (data) {
      const start = `${data.startDate.getFullYear()}년 ${data.startDate.getMonth() + 1}월`;
      const end = `${data.endDate.getFullYear()}년 ${data.endDate.getMonth() + 1}월`;
      setCareerTime({ startTime: start, endTime: end });
    }
  }, [data]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  console.log(showAnimation);

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
      >
        <div className="flow-root relative mb-10">
          <PeopleImageWithAnimation showAnimation={showAnimation} imageURL={data.imageURL} />
          <div className="break-all">
            <article className="text-neutral-700 font-noto flex flex-col mb-7">
              <h3 className="text-base font-bold leading-8">연락처 정보</h3>
              <ul className="list-inside list-disc">
                {data.office && (
                  <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                    <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                    <p>교수실: {data.office}</p>
                  </li>
                )}
                {data.email && (
                  <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                    <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                    <p>
                      이메일:
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
                      웹사이트:
                      <Link className="ml-1 text-link hover:underline" href={`${data.website}`}>
                        {data.website}
                      </Link>
                    </p>
                  </li>
                )}
              </ul>
            </article>
            <PeopleInfoList title="학력" infoList={data.educations} />
            <PeopleInfoList title="연구 분야" infoList={data.researchAreas} />
            <div className="mb-7 font-noto font-medium text-sm text-neutral-700">
              재직 기간: {careerTime.startTime} - {careerTime.endTime}
            </div>
          </div>
        </div>
      </PageLayout>
    )
  );
}
