'use client';

import { postClubAction } from '@/actions/about';
import ClubEditor, { ClubFormData } from '@/app/[locale]/about/student-clubs/components/ClubEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { contentToFormData } from '@/utils/formData';
import { handleServerResponse } from '@/utils/serverActionError';

export default function StudentClubCreatePage() {
  const onSubmit = async ({ image, ...requestObject }: ClubFormData) => {
    const formData = contentToFormData('CREATE', { requestObject, image });
    const resp = await postClubAction(formData);
    handleServerResponse(resp, { successMessage: '동아리 소개를 추가했습니다.' });
  };

  return (
    <PageLayout title="동아리 소개 추가" titleType="big" hideNavbar>
      <ClubEditor onSubmit={onSubmit} />
    </PageLayout>
  );
}
