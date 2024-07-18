'use client';

import { useTranslations } from 'next-intl';

import { deleteFacultyAction } from '@/actions/people';
import { Link } from '@/navigation';

import HeaderAndList from '@/app/[locale]/people/helper/HeaderAndList';
import Profile from '@/app/[locale]/people/helper/Profile';

import { CurvedHorizontalSmallNode } from '@/components/common/Nodes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Faculty } from '@/types/people';

import { getPath } from '@/utils/page';
import { faculty, researchLabs } from '@/utils/segmentNode';

import DeleteEditButtons from '../../helper/AdminFeatures';
import PageTitle from '../../helper/PageTitle';

const facultyPath = getPath(faculty);
const labPath = getPath(researchLabs);

export default function FacultyMemberPageContent({ faculty }: { faculty: Faculty }) {
  const t = useTranslations('Content');

  const handleDelete = async () => {
    return await deleteFacultyAction();
  };

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
              href={`${labPath}/${faculty.labId}`}
              className=" cursor-pointer text-sm font-medium leading-5 text-neutral-700 hover:text-main-orange"
            >
              {faculty?.labName}
            </Link>
          </div>
        </div>
        <div className="mt-8 break-all">
          <HeaderAndList header={t('학력')} list={faculty.educations ?? []} />
          <HeaderAndList header={t('연구 분야')} list={faculty.researchAreas ?? []} />
          <HeaderAndList header={t('경력')} list={faculty.careers ?? []} />
        </div>
        <DeleteEditButtons onDelete={handleDelete} editHref={`${facultyPath}/${faculty.id}/edit`} />
      </div>
    </PageLayout>
  );
}
