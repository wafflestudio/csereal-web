'use client';

import { putResearchCenterAction } from '@/actions/research';
import { ResearchCenter } from '@/apis/types/research';
import ResearchCenterEditor, {
  ResearchCenterFormData,
} from '@/app/[locale]/research/centers/components/ResearchCenterEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { WithLanguage } from '@/types/language';
import { contentToFormData } from '@/utils/formData';
import { handleServerResponse } from '@/utils/serverActionError';

export default function ResearchCenterEditPageContent({
  center,
}: {
  center: WithLanguage<ResearchCenter>;
}) {
  const onSubmit = async ({ image, ...requestObject }: ResearchCenterFormData) => {
    const formData = contentToFormData('EDIT', { requestObject, image });
    const resp = await putResearchCenterAction({ ko: center.ko.id, en: center.en.id }, formData);
    handleServerResponse(resp, { successMessage: '연구 센터를 수정했습니다.' });
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
