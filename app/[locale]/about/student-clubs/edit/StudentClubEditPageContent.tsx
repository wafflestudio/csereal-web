'use client';

import { putClubAction } from '@/actions/about';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { Club } from '@/types/about';
import { WithLanguage } from '@/types/language';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { validateBasicForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { studentClubs } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const clubPath = getPath(studentClubs);

export default function StudentClubEditPageContent({ data }: { data: WithLanguage<Club> }) {
  const router = useRouter();

  const handleCancel = () => router.push(clubPath);

  const handleSubmit = async (content: BasicEditorContent) => {
    validateBasicForm(content, true);

    const formData = contentToFormData('EDIT', {
      requestObject: getRequestObject(
        { ko: data.ko.id, en: data.en.id },
        content,
        data.ko.imageURL !== null && content.mainImage === null,
      ),
      image: content.mainImage,
    });

    try {
      handleServerAction(await putClubAction(formData));
      successToast('동아리 소개를 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="동아리 소개 편집" titleType="big" hideNavbar>
      <BasicEditor
        initialContent={{
          name: { ko: data.ko.name, en: data.en.name },
          description: { ko: data.ko.description, en: data.en.description },
          mainImage: data.ko.imageURL ? { type: 'UPLOADED_IMAGE', url: data.ko.imageURL } : null,
        }}
        actions={{ type: 'EDIT', onCancel: handleCancel, onSubmit: handleSubmit }}
        showName
        showLanguage
        showMainImage
      />
    </PageLayout>
  );
}

const getRequestObject = (
  ids: WithLanguage<number>,
  content: BasicEditorContent,
  removeImage: boolean,
) => {
  return {
    ko: { id: ids.ko, name: content.name.ko, description: content.description.ko },
    en: { id: ids.en, name: content.name.en, description: content.description.en },
    removeImage,
  };
};
