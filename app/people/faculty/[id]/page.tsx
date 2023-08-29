import Link from 'next/link';
import { useParams } from 'next/navigation';

import { getFaculty } from '@/apis/people';

import { CurvedHorizontalSmallNode } from '@/components/common/Nodes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import FacultyInfoWithImage from '@/components/people/FacultyInfoWithImage';
import PeopleInfoList from '@/components/people/PeopleInfoList';

import { researchLabs } from '@/types/page';

import { getPath } from '@/utils/page';

const labUrl = getPath(researchLabs);

export default async function FacultyMemberPage({ params }: { params: { id: number } }) {
  const data = await getFaculty(params.id);

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
          <FacultyInfoWithImage
            office={data.office}
            phone={data.phone}
            fax={data.fax}
            email={data.email}
            website={data.website}
            imageURL={data.imageURL}
          />
          <div className="flex flex-row">
            <CurvedHorizontalSmallNode />
            <div className=" border-b-[1px] pb-[5px] pr-2 border-b-main-orange -translate-x-[7.15px] translate-y-[1.5px]">
              <Link
                href={`${labUrl}`}
                className="font-noto font-medium text-sm leading-5 hover:text-main-orange hover:cursor-pointer"
              >
                {data?.labName}
              </Link>
            </div>
          </div>
          <div className="mt-8 break-all">
            <PeopleInfoList title="학력" infoList={data.educations} />
            {data.researchAreas !== undefined && (
              <PeopleInfoList title="연구 분야" infoList={data.researchAreas} />
            )}
            {data.careers && <PeopleInfoList title="경력" infoList={data.careers} />}
          </div>
        </div>
      </PageLayout>
    )
  );
}
