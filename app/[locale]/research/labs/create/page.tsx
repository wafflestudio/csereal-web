'use client';

import { postResearchLabAction } from '@/actions/research';
import ResearchLabEditor, { ResearchLabEditorContent } from '@/components/editor/ResearchLabEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { validateResearchLabForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { researchLabs } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const labsPath = getPath(researchLabs);

export default function ResearchLabCreatePage() {
  const router = useRouter();

  const handleCancel = () => router.push(labsPath);

  const handleSubmit = async (content: WithLanguage<ResearchLabEditorContent>) => {
    validateResearchLabForm(content);
    const formData = contentToFormData('CREATE', {
      requestObject: getRequestObject(content),
    });

    try {
      handleServerAction(await postResearchLabAction(formData));
      successToast('연구실을 추가했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="연구실 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchLabEditor
        actions={{ type: 'EDIT', onSubmit: handleSubmit, onCancel: handleCancel }}
      />
    </PageLayout>
  );
}

const getRequestObject = (content: WithLanguage<ResearchLabEditorContent>) => {
  return {
    ko: { ...content.ko },
    en: { ...content.en },
  };
};
