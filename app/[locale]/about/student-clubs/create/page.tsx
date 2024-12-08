'use client';

import { postClubAction } from '@/actions/about';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import ClubEditor, { ClubFormData } from '../components/ClubEditor';

export default function StudentClubCreatePage() {
  const onSubmit = async ({ image, ...requestObject }: ClubFormData) => {
    try {
      const formData = contentToFormData('CREATE', { requestObject, image });
      handleServerAction(await postClubAction(formData));
      successToast('동아리 소개를 추가했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="동아리 소개 추가" titleType="big" hideNavbar>
      <ClubEditor onSubmit={onSubmit} />
    </PageLayout>
  );
}
