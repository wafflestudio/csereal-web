'use client';

import { postResearchGroupAction } from '@/actions/research';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { validateBasicForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { researchGroups } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import ResearchGroupLabsEditGuide from '../ResearchGroupLabsEditGuide';

const groupsPath = getPath(researchGroups);

export default function ResearchGroupCreatePage() {
  const router = useRouter();

  const handleCancel = () => router.push(groupsPath);

  const handleSubmit = async (content: BasicEditorContent) => {
    validateBasicForm(content);
    const formData = contentToFormData('CREATE', {
      requestObject: getRequestObject(content),
      image: content.mainImage,
    });

    try {
      handleServerAction(await postResearchGroupAction(formData));
      successToast('연구 스트림을 추가했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="연구 스트림 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchGroupLabsEditGuide />
      <BasicEditor
        actions={{ type: 'EDIT', onSubmit: handleSubmit, onCancel: handleCancel }}
        showLanguage
        showTitle
        showMainImage
      />
    </PageLayout>
  );
}

const getRequestObject = (content: BasicEditorContent) => {
  const type = 'groups';

  return {
    ko: { name: content.title.ko, description: content.description.ko, type },
    en: { name: content.title.en, description: content.description.en, type },
  };
};
