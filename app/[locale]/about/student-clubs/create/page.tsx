'use client';

import { postClubAction } from '@/actions/about';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { validateBasicForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { studentClubs } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

const clubPath = getPath(studentClubs);

export default function StudentClubCreatePage() {
  const router = useRouter();

  const handleCancel = () => router.push(clubPath);

  const handleSubmit = async (content: BasicEditorContent) => {
    validateBasicForm(content);

    const formData = contentToFormData(
      'CREATE',
      {
        requestObject: getRequestObject(content),
        image: content.mainImage,
      },
      true,
    );

    try {
      handleServerAction(await postClubAction(formData));
      successToast('동아리 소개를 추가했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="동아리 소개 추가" titleType="big">
      <BasicEditor
        actions={{ type: 'EDIT', onCancel: handleCancel, onSubmit: handleSubmit }}
        showName
        showLanguage
        showMainImage
      />
    </PageLayout>
  );
}

const getRequestObject = (content: BasicEditorContent) => {
  return {
    ko: { name: content.name.ko, description: content.description.ko },
    en: { name: content.name.en, description: content.description.en },
  };
};
