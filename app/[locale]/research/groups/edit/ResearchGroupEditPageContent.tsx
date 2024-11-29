'use client';

import { putResearchGroupAction } from '@/actions/research';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/i18n/routing';
import { WithLanguage } from '@/types/language';
import { ResearchGroup } from '@/types/research';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { validateBasicForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { researchGroups } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import ResearchGroupLabsEditGuide from '../ResearchGroupLabsEditGuide';

const groupsPath = getPath(researchGroups);

export default function ResearchGroupEditPageContent({
  group,
}: {
  group: WithLanguage<ResearchGroup>;
}) {
  const router = useRouter();

  const handleCancel = () => router.push(groupsPath);

  const handleSubmit = async (content: BasicEditorContent) => {
    validateBasicForm(content);
    const formData = contentToFormData('EDIT', {
      requestObject: getRequestObject(
        content,
        group.ko.mainImageUrl !== null && content.mainImage === null,
      ),
      image: content.mainImage,
    });

    try {
      handleServerAction(
        await putResearchGroupAction({ ko: group.ko.id, en: group.en.id }, formData),
      );
      successToast('연구 스트림을 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="연구 스트림 편집" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <ResearchGroupLabsEditGuide />
      <BasicEditor
        initialContent={{
          title: { ko: group.ko.name, en: group.en.name },
          description: { ko: group.ko.description, en: group.en.description },
          mainImage: group.ko.mainImageUrl
            ? { type: 'UPLOADED_IMAGE', url: group.ko.mainImageUrl }
            : null,
        }}
        actions={{ type: 'EDIT', onSubmit: handleSubmit, onCancel: handleCancel }}
        showLanguage
        showTitle
        showMainImage
      />
    </PageLayout>
  );
}

const getRequestObject = (content: BasicEditorContent, removeImage: boolean) => {
  const type = 'groups';

  return {
    ko: { name: content.title.ko, description: content.description.ko, type, removeImage },
    en: { name: content.title.en, description: content.description.en, type, removeImage },
  };
};
