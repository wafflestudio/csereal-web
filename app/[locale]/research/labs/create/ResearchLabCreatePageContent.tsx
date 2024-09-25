'use client';

import { postResearchLabAction } from '@/actions/research';
import { isLocalFile, PostEditorFile } from '@/components/editor/PostEditorTypes';
import ResearchLabEditor, { ResearchLabEditorContent } from '@/components/editor/ResearchLabEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { WithLanguage } from '@/types/language';
import { ResearchGroup } from '@/types/research';
import { errorToStr } from '@/utils/error';
import { validateResearchLabForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { researchLabs } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { encodeFormDataFileName } from '@/utils/string';
import { errorToast, successToast } from '@/utils/toast';

const labsPath = getPath(researchLabs);

export default function ResearchLabCreatePageContent({
  groups,
}: {
  groups: WithLanguage<ResearchGroup[]>;
}) {
  const router = useRouter();

  const handleCancel = () => router.push(labsPath);

  const handleSubmit = async (content: WithLanguage<ResearchLabEditorContent>) => {
    validateResearchLabForm(content);

    const formData = contentToFormData(getRequestObject(content), content.ko.pdf);

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
        groups={groups}
        actions={{ type: 'EDIT', onSubmit: handleSubmit, onCancel: handleCancel }}
      />
    </PageLayout>
  );
}

// TODO: 필요한가?
const getRequestObject = (content: WithLanguage<ResearchLabEditorContent>) => {
  return {
    ko: { ...content.ko },
    en: { ...content.en },
  };
};

const contentToFormData = (requestObject: object, pdf: PostEditorFile[]) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([JSON.stringify(requestObject)], {
      type: 'application/json',
    }),
  );

  encodeFormDataFileName(
    formData,
    'pdf',
    pdf.filter(isLocalFile).map((x) => x.file),
  );

  return formData;
};
