import { notFound } from 'next/navigation';

import { Link } from '@/navigation';

import { getFaculty } from '@/apis/people';

import HeaderAndList from '@/app/[locale]/people/helper/HeaderAndList';
import Profile from '@/app/[locale]/people/helper/Profile';

import { CurvedHorizontalSmallNode } from '@/components/common/Nodes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Locale } from '@/types/locale';

import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { researchLabs } from '@/utils/segmentNode';

import PageTitle from '../../helper/PageTitle';

export async function generateMetadata({ params: { locale, id } }: FacultyMemberPageProps) {
  const faculty = await getFaculty('ko', id);

  return await getMetadata({
    locale,
    metadata: {
      title: `${faculty.name}`,
      description: `서울대학교 컴퓨터공학부 ${faculty.name} 교수 페이지입니다.`,
    },
  });
}

const labUrl = getPath(researchLabs);

interface FacultyMemberPageProps {
  params: { id: number; locale: Locale };
}

export default async function FacultyMemberPage({ params }: FacultyMemberPageProps) {
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
