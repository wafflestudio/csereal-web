'use client';

import { postResearchCenterAction } from '@/actions/research';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { contentToFormData } from '@/utils/formData';
import { handleServerResponse } from '@/utils/serverActionError';

import ResearchCenterEditor, { ResearchCenterFormData } from '../components/ResearchCenterEditor';

export default function ResearchCenterCreatePage() {
  const onSubmit = async ({ image, ...requestObject }: ResearchCenterFormData) => {
    const formData = contentToFormData('CREATE', { requestObject, image });
    const resp = await postResearchCenterAction(formData);
    handleServerResponse(resp, { successMessage: '연구 센터를 추가했습니다.' });
  };

  return (
    <PageLayout title="연구 센터 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchCenterEditor onSubmit={onSubmit} />
    </PageLayout>
  );
}
