'use client';

import { postResearchCenterAction } from '@/actions/research';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import ResearchCenterEditor, { ResearchCenterFormData } from '../components/ResearchCenterEditor';

export default function ResearchCenterCreatePage() {
  const onSubmit = async ({ image, ...requestObject }: ResearchCenterFormData) => {
    const formData = contentToFormData('CREATE', { requestObject, image });
    try {
      handleServerAction(await postResearchCenterAction(formData));
      successToast('연구 센터를 추가했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="연구 센터 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchCenterEditor onSubmit={onSubmit} />
    </PageLayout>
  );
}
