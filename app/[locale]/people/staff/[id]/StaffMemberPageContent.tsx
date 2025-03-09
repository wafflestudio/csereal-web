'use client';

import { useTranslations } from 'next-intl';

import { deleteStaffAction } from '@/actions/people';
import { Staff } from '@/apis/types/people';
import { DeleteButton, EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { staff } from '@/constants/segmentNode';
import { Link } from '@/i18n/routing';
import { WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { getPath } from '@/utils/page';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import BulletRow from '../../components/BulletRow';
import HeaderAndList from '../../components/HeaderAndList';
import PageTitle from '../../components/PageTitle';
import ProfileImage from '../../components/ProfileImage';

const staffPath = getPath(staff);

export default function StaffMemberPageContent({
  staff,
  ids,
}: {
  staff: Staff;
  ids: WithLanguage<number>;
}) {
  const t = useTranslations('Content');

  const handleDelete = async () => {
    try {
      handleServerAction(await deleteStaffAction(ids));
      successToast('행정직원을 삭제했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout
      title={<PageTitle name={staff.name} academicRank={staff.role} />}
      titleType="big"
      titleMargin="mb-9"
    >
      <div className="relative mb-32 flex flex-col items-start sm:flex-row sm:gap-[3.75rem]">
        <ProfileImage imageURL={staff.imageURL} />
        <div className="mt-6 sm:mt-0">
          <article className="mb-6 flex flex-col text-neutral-700">
            <h3 className=" text-base font-bold leading-8">{t('연락처')}</h3>
            <ul className="list-inside list-disc">
              <BulletRow>
                {t('위치')}: {staff.office}
              </BulletRow>
              <BulletRow>
                {t('전화')}: {staff.phone}
              </BulletRow>
              <BulletRow>
                {t('이메일')}:
                <Link className="ml-1 text-link hover:underline" href={`mailto:${staff.email}`}>
                  {staff.email}
                </Link>
              </BulletRow>
            </ul>
          </article>
          <HeaderAndList header={t('주요 업무')} list={staff.tasks} />
        </div>
      </div>
      <LoginVisible staff>
        <div className="flex gap-3">
          <DeleteButton onDelete={handleDelete} />
          <EditButton href={`${staffPath}/${staff.id}/edit`} />
        </div>
      </LoginVisible>
    </PageLayout>
  );
}
