'use client';

import { putClubAction } from '@/actions/about';
import { Club } from '@/apis/types/about';
import ClubEditor, { ClubFormData } from '@/app/[locale]/about/student-clubs/components/ClubEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { WithLanguage } from '@/types/language';
import { contentToFormData } from '@/utils/formData';
import { handleServerResponse } from '@/utils/serverActionError';

export default function StudentClubEditPageContent({ data }: { data: WithLanguage<Club> }) {
  const onSubmit = async (_formData: ClubFormData) => {
    const formData = contentToFormData('EDIT', {
      requestObject: {
        ko: _formData.ko,
        en: _formData.en,
        removeImage: data.ko.imageURL !== null && _formData.image === null,
      },
      image: _formData.image,
    });
    const resp = await putClubAction(formData);
    handleServerResponse(resp, { successMessage: '동아리 소개를 수정했습니다.' });
  };

  return (
    <PageLayout title="동아리 소개 편집" titleType="big" hideNavbar>
      <ClubEditor
        onSubmit={onSubmit}
        defaultValues={{
          ...data,
          image: data.ko.imageURL ? { type: 'UPLOADED_IMAGE', url: data.ko.imageURL } : undefined,
        }}
      />
    </PageLayout>
  );
}
