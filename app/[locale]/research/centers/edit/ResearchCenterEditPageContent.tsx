'use client';

import { putResearchCenterAction } from '@/actions/research';
import ResearchCenterEditor, {
  ResearchCenterEditorContent,
} from '@/components/editor/ResearchCenterEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { WithLanguage } from '@/types/language';
import { ResearchCenter } from '@/types/research';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { validateResearchCenterForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { researchCenters } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const centersPath = getPath(researchCenters);

export default function ResearchCenterEditPageContent({
  center,
}: {
  center: WithLanguage<ResearchCenter>;
}) {
  const router = useRouter();

  const handleCancel = () => router.push(centersPath);

  const handleSubmit = async (content: WithLanguage<ResearchCenterEditorContent>) => {
    validateResearchCenterForm(content);
    const formData = contentToFormData('EDIT', {
      requestObject: getRequestObject(
        content,
        center.ko.mainImageUrl !== null && content.ko.mainImage === null,
      ),
      image: content.ko.mainImage,
    });

    try {
      handleServerAction(
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
        initialContent={center}
        actions={{ type: 'EDIT', onSubmit: handleSubmit, onCancel: handleCancel }}
      />
    </PageLayout>
  );
}

const getRequestObject = (
  content: WithLanguage<ResearchCenterEditorContent>,
  removeImage: boolean,
) => {
  const type = 'centers';
  const mainImage = undefined; // 이미지는 따로 보내야 하므로 requestObj에서 제외

  return {
    ko: { ...content.ko, type, mainImage, removeImage },
    en: { ...content.en, type, mainImage, removeImage },
  };
};
