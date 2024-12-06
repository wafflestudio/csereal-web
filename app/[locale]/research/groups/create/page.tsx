'use client';

import { postResearchGroupAction } from '@/actions/research';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import ResearchGroupEditor, { ResearchGroupFormData } from '../components/ResearchGroupEditor';

export default function ResearchGroupCreatePage() {
  const onSubmit = async ({ image, ...requestObject }: ResearchGroupFormData) => {
    const formData = contentToFormData('CREATE', { requestObject, image });
    try {
      handleServerAction(await postResearchGroupAction(formData));
      successToast('연구 스트림을 추가했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="연구 스트림 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchGroupEditor onSubmit={onSubmit} />
    </PageLayout>
  );
}
