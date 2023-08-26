'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { getMockStaff } from '@/apis/staff';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import PeopleImageWithAnimation from '@/components/people/PeopleImageWithAnimation';
import PeopleInfoList from '@/components/people/PeopleInfoList';

export default function StaffMemberPage() {
  const id = parseInt(useParams().id);

  const { data, isLoading, error } = useSWR({ url: `/staff/${id}` }, getMockStaff);

  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    data && (
      <PageLayout
        title={
          <div className="flex flex-row items-end">
            <p>{data.name}</p>
            <p className="text-neutral-500 text-md font-normal ml-2 leading-7">{data.role}</p>
          </div>
        }
        titleType="big"
        titleMargin="mb-9"
      >
        <div className="flow-root relative mb-32">
          <PeopleImageWithAnimation showAnimation={showAnimation} imageURL={data.imageURL} />
          <div className="break-all">
            <article className="text-neutral-700 font-noto flex flex-col mb-7">
              <h3 className="text-base font-bold leading-8">주요 업무</h3>
              <ul className="list-inside list-disc">
                {data.office && (
                  <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                    <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                    <p>위치: {data.office}</p>
                  </li>
                )}
                {data.phone && (
                  <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                    <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                    <p>전화: {data.phone}</p>
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
              </ul>
            </article>
            <PeopleInfoList title="학력" infoList={data.tasks} />
          </div>
        </div>
      </PageLayout>
    )
  );
}
