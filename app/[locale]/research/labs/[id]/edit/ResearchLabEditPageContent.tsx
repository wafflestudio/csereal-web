'use client';

import { putResearchLabAction } from '@/actions/research';
import { isLocalFile, PostEditorFile } from '@/components/editor/PostEditorTypes';
import ResearchLabEditor, { ResearchLabEditorContent } from '@/components/editor/ResearchLabEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { WithLanguage } from '@/types/language';
import { SimpleFaculty } from '@/types/people';
import { ResearchGroup, ResearchLab } from '@/types/research';
import { errorToStr } from '@/utils/error';
import { validateResearchLabForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { researchLabs } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { encodeFormDataFileName } from '@/utils/string';
import { errorToast, successToast } from '@/utils/toast';

interface ResearchLabEditPageContentProps {
  lab: WithLanguage<ResearchLab>;
  groups: WithLanguage<ResearchGroup[]>;
  professors: WithLanguage<SimpleFaculty[]>;
}

const labsPath = getPath(researchLabs);

export default function ResearchLabEditPageContent({
  lab,
  groups,
  professors,
}: ResearchLabEditPageContentProps) {
  const router = useRouter();

  const handleCancel = () => router.push(labsPath);

  const handleSubmit = async (content: WithLanguage<ResearchLabEditorContent>) => {
    validateResearchLabForm(content, professors, { ko: lab.ko.id, en: lab.en.id });
    const removePdf = lab.ko.pdf !== null && content.ko.pdf.length === 0;
    const formData = contentToFormData(getRequestObject(content, removePdf), content.ko.pdf);

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
        groups={groups}
        professors={professors}
        actions={{ onCancel: handleCancel, onSubmit: handleSubmit, type: 'EDIT' }}
        initialContent={lab}
      />
    </PageLayout>
  );
}

const getRequestObject = (content: WithLanguage<ResearchLabEditorContent>, removePdf: boolean) => {
  return {
    ko: { ...content.ko, removePdf },
    en: { ...content.en, removePdf },
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
