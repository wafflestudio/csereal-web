'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getMockFaculty } from '@/apis/faculty';

import { CurvedHorizontalSmallNode } from '@/components/common/Nodes';
import PageLayout from '@/components/layout/PageLayout';
import FacultyInfoWithImage from '@/components/people/FacultyInfoWithImage';
import PeopleInfoList from '@/components/people/PeopleInfoList';

import { faculty, laboratories } from '@/types/page';
import { FacultyResponse } from '@/types/people';

import { getPath } from '@/utils/page';

const labUrl = getPath(laboratories);

export default function FacultyMemberPage() {
  const id = parseInt(useParams().id);

  const [posts, setPosts] = useState<FacultyResponse>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMockFaculty(id);
      setPosts(response);
    };
    fetchData();
  }, [id]);

  console.log(posts);

  return (
    posts && (
      <PageLayout currentPage={faculty} title={posts.name} titleSize="text-2xl">
        <div className="flow-root relative mb-10">
          <FacultyInfoWithImage
            office={posts.office}
            phone={posts.phone}
            fax={posts.fax}
            email={posts.email}
            website={posts.website}
            imageURL={posts.imageURL}
          />
          <div className="flex flex-row">
            <CurvedHorizontalSmallNode />
            <div className=" border-b-[1px] pb-[5px] pr-2 border-b-main-orange -translate-x-[7.15px] translate-y-[1.5px]">
              <Link
                href={`${labUrl}/${posts?.labId}`}
                className="font-noto font-medium text-sm leading-5 hover:text-main-orange hover:cursor-pointer"
              >
                {posts?.labName}
              </Link>
            </div>
          </div>
          <div className="mt-8 break-all">
            <PeopleInfoList title="학력" infoList={posts.educations} />
            <PeopleInfoList title="연구 분야" infoList={posts.researchAreas} />
            {posts.careers && <PeopleInfoList title="경력" infoList={posts.careers} />}
          </div>
        </div>
      </PageLayout>
    )
  );
}
