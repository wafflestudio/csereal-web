'use client';

import { putFacultyRecruitmentAction } from '@/actions/recruitment';
import BasicEditor, { BasicEditorContent } from '@/components/editor/BasicEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { GETFacultyRecruitmentResponse } from '@/types/post';
import { errorToStr } from '@/utils/error';
import { contentToFormData } from '@/utils/formData';
import { validateBasicForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { facultyRecruitment } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

interface FacultyRecruitmentEditPageContentProps {
  data: GETFacultyRecruitmentResponse;
}

const recruitPath = getPath(facultyRecruitment);

export default function FacultyRecruitmentEditPageContent({
  data,
}: FacultyRecruitmentEditPageContentProps) {
  const router = useRouter();

  const handleCancel = () => router.push(recruitPath);

  const handleSubmit = async (content: BasicEditorContent) => {
    validateBasicForm(content, { titleRequired: true, engRequired: false });

    const formData = contentToFormData('EDIT', {
      requestObject: getRequestObject(
        content,
        data.mainImageUrl !== null && content.mainImage === null,
      ),
      image: content.mainImage,
    });

    try {
      handleServerAction(await putFacultyRecruitmentAction(formData));
      successToast(`신임교수초빙을 수정했습니다.`);
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="신임교수초빙 편집" titleType="big" hideNavbar>
      <BasicEditor
        initialContent={{
          description: { ko: data.description, en: '' },
          title: { ko: data.title, en: '' },
          mainImage: data.mainImageUrl ? { type: 'UPLOADED_IMAGE', url: data.mainImageUrl } : null,
        }}
        actions={{ type: 'EDIT', onCancel: handleCancel, onSubmit: handleSubmit }}
        showMainImage
        showTitle
      />
    </PageLayout>
  );
}

const getRequestObject = (content: BasicEditorContent, removeImage: boolean) => {
  return {
    title: content.title,
    description: content.description,
    removeImage,
  };
};
