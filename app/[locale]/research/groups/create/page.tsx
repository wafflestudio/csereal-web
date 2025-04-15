'use client';

import { postResearchGroupAction } from '@/actions/research';
import ResearchGroupEditor, {
  ResearchGroupFormData,
} from '@/app/[locale]/research/groups/components/ResearchGroupEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { contentToFormData } from '@/utils/formData';
import { handleServerResponse } from '@/utils/serverActionError';

export default function ResearchGroupCreatePage() {
  const onSubmit = async ({ image, ...requestObject }: ResearchGroupFormData) => {
    const formData = contentToFormData('CREATE', { requestObject, image });
    const resp = await postResearchGroupAction(formData);
    handleServerResponse(resp, { successMessage: '연구 스트림을 추가했습니다.' });
  };

  return (
    <PageLayout title="연구 스트림 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchGroupEditor onSubmit={onSubmit} />
    </PageLayout>
  );
}
