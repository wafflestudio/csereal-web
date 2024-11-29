'use client';

import { postResearchCenterAction } from '@/actions/research';
import ResearchCenterEditor, {
  ResearchCenterEditorContent,
} from '@/components/editor/ResearchCenterEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { validateResearchCenterForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { researchCenters } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const centersPath = getPath(researchCenters);

export default function ResearchCenterCreatePage() {
  const router = useRouter();

  const handleCancel = () => router.push(centersPath);

  const handleSubmit = async (content: WithLanguage<ResearchCenterEditorContent>) => {
    validateResearchCenterForm(content);
    const formData = contentToFormData('CREATE', {
      requestObject: getRequestObject(content),
      image: content.ko.mainImage,
    });

    try {
      handleServerAction(await postResearchCenterAction(formData));
      successToast('연구 센터를 추가했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="연구 센터 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchCenterEditor
        actions={{ type: 'EDIT', onSubmit: handleSubmit, onCancel: handleCancel }}
      />
    </PageLayout>
  );
}

const getRequestObject = (content: WithLanguage<ResearchCenterEditorContent>) => {
  const type = 'centers';
  const mainImage = undefined; // 이미지는 따로 보내야 하므로 requestObj에서 제외

  return {
    ko: { ...content.ko, type, mainImage },
    en: { ...content.en, type, mainImage },
  };
};
