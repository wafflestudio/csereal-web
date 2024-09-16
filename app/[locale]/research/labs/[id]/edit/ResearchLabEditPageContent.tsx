'use client';

import { putResearchLabAction } from '@/actions/research';
import ResearchLabEditor from '@/components/editor/ResearchLabEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { WithLanguage } from '@/types/language';
import { ResearchLab } from '@/types/research';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { validateResearchLabForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { researchLabs } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const labsPath = getPath(researchLabs);

export default function ResearchLabEditPageContent({ lab }: { lab: WithLanguage<ResearchLab> }) {
  const router = useRouter();

  const handleCancel = () => router.push(labsPath);

  const handleSubmit = async (content: WithLanguage<ResearchLab>) => {
    validateResearchLabForm(content);
    const formData = contentToFormData('EDIT', {
      requestObject: getRequestObject(content),
    });

    try {
      handleServerAction(await putResearchLabAction({ ko: lab.ko.id, en: lab.en.id }, formData));
      successToast('연구실을 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="연구실 편집" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchLabEditor
        actions={{ onCancel: handleCancel, onSubmit: handleSubmit, type: 'EDIT' }}
        initialContent={lab}
      />
    </PageLayout>
  );
}

// TODO: 내용 제대로 넣기
const getRequestObject = (content: WithLanguage<ResearchLab>) => {
  return {
    ko: { name: content.ko.name, description: content.ko.description },
    en: { name: content.en.name, description: content.en.description },
  };
};
