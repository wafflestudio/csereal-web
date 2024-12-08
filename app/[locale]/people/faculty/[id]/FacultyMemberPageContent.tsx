'use client';

import { useTranslations } from 'next-intl';

import { deleteFacultyAction } from '@/actions/people';
import { DeleteButton, EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import { CurvedHorizontalSmallNode } from '@/components/common/Nodes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Link } from '@/i18n/routing';
import { WithLanguage } from '@/types/language';
import { Faculty } from '@/types/people';
import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { faculty, researchLabs } from '@/constants/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import HeaderAndList from '../../components/HeaderAndList';
import PageTitle from '../../components/PageTitle';
import Profile from '../../components/Profile';

const facultyPath = getPath(faculty);
const labPath = getPath(researchLabs);

export default function FacultyMemberPageContent({
  faculty,
  ids,
}: {
  faculty: Faculty;
  ids: WithLanguage<number>;
}) {
  const t = useTranslations('Content');

  const handleDelete = async () => {
    try {
      handleServerAction(await deleteFacultyAction(ids, faculty.status));
      successToast('교수를 삭제했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
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
          <div className="-translate-x-[7.15px] translate-y-[4px] border-b-[1px] border-b-main-orange pb-[5px] pr-2">
            <Link
              href={`${labPath}/${faculty.labId}`}
              className=" cursor-pointer text-sm font-medium leading-5 text-neutral-700 hover:text-main-orange"
            >
              {faculty?.labName}
            </Link>
          </div>
        </div>
        <div className="mt-8 break-all">
          <HeaderAndList header={t('학력')} list={faculty.educations} />
          <HeaderAndList header={t('연구 분야')} list={faculty.researchAreas} />
          <HeaderAndList header={t('경력')} list={faculty.careers} />
        </div>
      </div>
      <LoginVisible staff>
        <div className="flex gap-3">
          <DeleteButton onDelete={handleDelete} />
          <EditButton href={`${facultyPath}/${faculty.id}/edit`} />
        </div>
      </LoginVisible>
    </PageLayout>
  );
}
