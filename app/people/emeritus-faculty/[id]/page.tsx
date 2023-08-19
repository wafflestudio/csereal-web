'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { getMockEmeritusFaculty } from '@/apis/faculty';

import PageLayout from '@/components/layout/PageLayout';
import PeopleImageWithHover from '@/components/people/PeopleImageWithHover';
import PeopleInfoList from '@/components/people/PeopleInfoList';

import { emeritusFaculty } from '@/types/page';
import { FacultyResponse } from '@/types/people';

export default function EmeritusFacultyMemberPage() {
  const id = parseInt(useParams().id);

  const [posts, setPosts] = useState<FacultyResponse>();
  const [careerTime, setCareerTime] = useState({ startTime: '', endTime: '' });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMockEmeritusFaculty(id);
      setPosts(response);
      const start = `${response.startDate.getFullYear()}년 ${response.startDate.getMonth() + 1}월`;
      const end = `${response.endDate.getFullYear()}년 ${response.endDate.getMonth() + 1}월`;
      setCareerTime({ startTime: start, endTime: end });
    };
    fetchData();
  }, [id]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    posts && (
      <PageLayout currentPage={emeritusFaculty} title={posts.name} titleSize="text-2xl">
        <div className="flow-root relative mb-10">
          <PeopleImageWithHover
            isHovered={isHovered}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            imageURL={posts.imageURL}
          />
          <div className="break-all">
            <article className="text-neutral-700 font-noto flex flex-col mb-7">
              <h3 className="text-base font-bold leading-8">연락처 정보</h3>
              <ul className="list-inside list-disc">
                {posts.office && (
                  <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                    <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                    <p>교수실: {posts.office}</p>
                  </li>
                )}
                {posts.email && (
                  <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                    <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                    <p>
                      이메일:
                      <Link
                        className="ml-1 text-link hover:underline"
                        href={`mailto:${posts.email}`}
                      >
                        {posts.email}
                      </Link>
                    </p>
                  </li>
                )}
                {posts.website && (
                  <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                    <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                    <p>
                      웹사이트:
                      <Link className="ml-1 text-link hover:underline" href={`${posts.website}`}>
                        {posts.website}
                      </Link>
                    </p>
                  </li>
                )}
              </ul>
            </article>
            <PeopleInfoList title="학력" infoList={posts.educations} />
            <PeopleInfoList title="연구 분야" infoList={posts.researchAreas} />
            <div className="mb-7 font-noto font-medium text-sm text-neutral-700">
              재직 기간: {careerTime.startTime} - {careerTime.endTime}
            </div>
          </div>
        </div>
      </PageLayout>
    )
  );
}
