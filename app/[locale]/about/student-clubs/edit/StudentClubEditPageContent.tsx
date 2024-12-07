'use client';

import { putClubAction } from '@/actions/about';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Club } from '@/types/about';
import { WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import ClubEditor, { ClubFormData } from '../components/ClubEditor';

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

    try {
      handleServerAction(await putClubAction(formData));
      successToast('동아리 소개를 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
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
