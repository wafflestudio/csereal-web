import { notFound } from 'next/navigation';

import { Link } from '@/navigation';

import { getFaculty } from '@/apis/people';

import HeaderAndList from '@/app/[locale]/people/helper/HeaderAndList';
import Profile from '@/app/[locale]/people/helper/Profile';

import { CurvedHorizontalSmallNode } from '@/components/common/Nodes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getPath } from '@/utils/page';
import { researchLabs } from '@/utils/segmentNode';

import PageTitle from '../../helper/PageTitle';

const labUrl = getPath(researchLabs);

export default async function FacultyMemberPage({
  params,
}: {
  params: { id: number; locale: 'ko' | 'en' };
}) {
  const faculty = await getFaculty('ko', params.id);
  if (faculty.status !== 'ACTIVE') notFound();

  return (
    <PageLayout title={<PageTitle {...faculty} />} titleType="big" titleMargin="mb-9">
      <div className="relative mb-10 sm:flow-root">
        <Profile
          office={faculty.office}
          phone={faculty.phone}
          fax={faculty.fax}
          email={faculty.email}
          website={faculty.website}
          imageURL={faculty.imageURL}
        />
        <div className="flex">
          <CurvedHorizontalSmallNode />
          <div className=" -translate-x-[7.15px] translate-y-[4px] border-b-[1px] border-b-main-orange pb-[5px] pr-2">
            <Link
              href={`${labUrl}/${faculty.labId}`}
              className=" cursor-pointer text-sm font-medium leading-5 text-neutral-700 hover:text-main-orange"
            >
              {faculty?.labName}
            </Link>
          </div>
        </div>
        <div className="mt-8 break-all">
          <HeaderAndList header="학력" list={faculty.educations} />
          <HeaderAndList header="연구 분야" list={faculty.researchAreas ?? []} />
          <HeaderAndList header="경력" list={faculty.careers ?? []} />
        </div>
      </div>
    </PageLayout>
  );
}
