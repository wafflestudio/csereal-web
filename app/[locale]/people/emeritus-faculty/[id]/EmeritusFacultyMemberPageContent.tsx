'use client';

import { useTranslations } from 'next-intl';

import { deleteFacultyAction } from '@/actions/people';
import { Link } from '@/navigation';

import { DeleteButton, EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { WithLanguage } from '@/types/language';
import { EmeritusFaculty } from '@/types/people';

import { getPath } from '@/utils/page';
import { faculty } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import BulletRow from '../../helper/BulletRow';
import HeaderAndList from '../../helper/HeaderAndList';
import PageTitle from '../../helper/PageTitle';
import ProfileImage from '../../helper/ProfileImage';

const facultyPath = getPath(faculty);

export default function EmeritusFacultyMemberPageContent({
  faculty,
  ids,
}: {
  faculty: EmeritusFaculty;
  ids: WithLanguage<number>;
}) {
  const t = useTranslations('Content');

  const careerTimeStr = `${t('재직 기간')}: ${faculty.startDate} - ${faculty.endDate}`;

  const handleDelete = async () => {
    try {
      handleServerAction(await deleteFacultyAction(ids, 'INACTIVE'));
      successToast('교수를 삭제했습니다.');
    } catch {
      errorToast('오류가 발생했습니다');
    }
  };

  return (
    <PageLayout title={<PageTitle {...faculty} />} titleType="big" titleMargin="mb-9">
      <div className="relative mb-10 flex flex-col items-start sm:flex-row sm:gap-[3.75rem]">
        <ProfileImage imageURL={faculty.imageURL} />
        <div className="mt-6 sm:mt-0">
          {(faculty.office || faculty.email || faculty.website) && (
            <article className="mb-6 flex flex-col  text-neutral-700">
              <h3 className=" text-base font-bold leading-8">{t('연락처')}</h3>
              <ul className="list-inside list-disc">
                {faculty.office && (
                  <BulletRow>
                    {t('교수실')}: {faculty.office}
                  </BulletRow>
                )}
                {faculty.email && (
                  <BulletRow>
                    {t('이메일')}:
                    <Link
                      className="ml-1 text-link hover:underline"
                      href={`mailto:${faculty.email}`}
                    >
                      {faculty.email}
                    </Link>
                  </BulletRow>
                )}
                {faculty.website && (
                  <BulletRow>
                    {t('웹사이트')}:
                    <Link className="ml-1 text-link hover:underline" href={`${faculty.website}`}>
                      {faculty.website}
                    </Link>
                  </BulletRow>
                )}
              </ul>
            </article>
          )}
          <HeaderAndList header={t('학력')} list={faculty.educations} />
          <HeaderAndList header={t('연구 분야')} list={faculty.researchAreas} />
          <div className=" mb-7 text-sm font-medium text-neutral-700">{careerTimeStr}</div>
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
