'use client';

import { putResearchGroupAction } from '@/actions/research';
import { ResearchGroup } from '@/apis/types/research';
import ResearchGroupEditor, {
  ResearchGroupFormData,
} from '@/app/[locale]/research/groups/components/ResearchGroupEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { WithLanguage } from '@/types/language';
import { contentToFormData } from '@/utils/formData';
import { handleServerResponse } from '@/utils/serverActionError';

export default function ResearchGroupEditPageContent({
  group,
}: {
  group: WithLanguage<ResearchGroup>;
}) {
  const onSubmit = async (content: ResearchGroupFormData) => {
    const removeImage = group.ko.mainImageUrl !== null && content.image === null;
    const formData = contentToFormData('EDIT', {
      requestObject: { ko: { ...content.ko, removeImage }, en: { ...content.en, removeImage } },
      image: content.image,
    });

    const resp = await putResearchGroupAction({ ko: group.ko.id, en: group.en.id }, formData);
    handleServerResponse(resp, { successMessage: '연구 스트림을 수정했습니다.' });
  };

  const defaultValues: ResearchGroupFormData = {
    ko: { ...group.ko, type: 'groups' },
    en: { ...group.en, type: 'groups' },
    image: group.ko.mainImageUrl ? { type: 'UPLOADED_IMAGE', url: group.ko.mainImageUrl } : null,
  };

  return (
    <PageLayout title="연구 스트림 편집" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchGroupEditor onSubmit={onSubmit} defaultValues={defaultValues} />
    </PageLayout>
  );
}
