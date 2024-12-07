'use client';

import { putResearchCenterAction } from '@/actions/research';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { WithLanguage } from '@/types/language';
import { ResearchCenter } from '@/types/research';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { handleServerAction_legacy } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';
import ResearchCenterEditor, { ResearchCenterFormData } from '../components/ResearchCenterEditor';

export default function ResearchCenterEditPageContent({
  center,
}: {
  center: WithLanguage<ResearchCenter>;
}) {
  const onSubmit = async ({ image, ...requestObject }: ResearchCenterFormData) => {
    const formData = contentToFormData('EDIT', { requestObject, image });
    try {
      handleServerAction_legacy(
        await putResearchCenterAction({ ko: center.ko.id, en: center.en.id }, formData),
      );
      successToast('연구 센터를 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="연구 센터 편집" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchCenterEditor
        onSubmit={onSubmit}
        defaultValues={{
          ko: { ...center.ko, type: 'centers' },
          en: { ...center.en, type: 'centers' },
          image: center.ko.mainImageUrl
            ? { type: 'UPLOADED_IMAGE', url: center.ko.mainImageUrl }
            : null,
        }}
      />
    </PageLayout>
  );
}
