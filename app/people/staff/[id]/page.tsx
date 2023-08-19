'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { getMockStaff } from '@/apis/staff';

import PageLayout from '@/components/layout/PageLayout';
import PeopleImageWithAnimation from '@/components/people/PeopleImageWithAnimation';
import PeopleInfoList from '@/components/people/PeopleInfoList';

import { staff } from '@/types/page';
import { StaffReponse } from '@/types/people';

export default function StaffMemberPage() {
  const id = parseInt(useParams().id);

  const [posts, setPosts] = useState<StaffReponse>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMockStaff(id);
      setPosts(response);
    };
    fetchData();
  }, [id]);

  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    posts && (
      <PageLayout currentPage={staff} title={posts.name} titleSize="text-2xl">
        <div className="flow-root relative mb-32">
          <PeopleImageWithAnimation showAnimation={showAnimation} imageURL={posts.imageURL} />
          <div className="break-all">
            <article className="text-neutral-700 font-noto flex flex-col mb-7">
              <h3 className="text-base font-bold leading-8">주요 업무</h3>
              <ul className="list-inside list-disc">
                {posts.office && (
                  <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                    <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                    <p>위치: {posts.office}</p>
                  </li>
                )}
                {posts.phone && (
                  <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                    <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                    <p>전화: {posts.phone}</p>
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
              </ul>
            </article>
            <PeopleInfoList title="학력" infoList={posts.tasks} />
          </div>
        </div>
      </PageLayout>
    )
  );
}
