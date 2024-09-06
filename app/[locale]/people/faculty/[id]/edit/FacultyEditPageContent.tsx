'use client';

import { putFacultyAction } from '@/actions/people';
import FacultyEditor, { FacultyEditorContent } from '@/components/editor/FacultyEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { Language, WithLanguage } from '@/types/language';
import { Faculty } from '@/types/people';
import { SimpleResearchLab } from '@/types/research';
import { contentToFormData } from '@/utils/formData';
import { validateFacultyForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

const facultyPath = getPath(faculty);
const emeritusFacultyPath = getPath(emeritusFaculty);

export default function FacultyEditPageContent({
  language,
  data,
  labs,
}: {
  language: Language;
  data: WithLanguage<Faculty>;
  labs: WithLanguage<SimpleResearchLab[]>;
}) {
  const router = useRouter();

  const handleCancel = () => {
    const path = data.ko.status === 'INACTIVE' ? emeritusFacultyPath : facultyPath;
    const id = data[language].id;
    router.push(`${path}/${id}`);
  };

  const handleComplete = async (content: WithLanguage<FacultyEditorContent>) => {
    validateFacultyForm(content);

    const formData = contentToFormData(
      'EDIT',
      {
        requestObject: getRequestObject(content),
        image: content.ko.image,
      },
      'image',
    );

    try {
      handleServerAction(
        await putFacultyAction(
          { ko: data.ko.id, en: data.en.id },
          formData,
          language,
          data.ko.status,
        ),
      );
    } catch {
      errorToast('오류가 발생했습니다');
    }
  };

  return (
    <PageLayout title="교수진 편집" titleType="big" titleMargin="mb-[2.25rem]" hideNavbar>
      <FacultyEditor
        initialContent={data}
        actions={{
          type: 'EDIT',
          onCancel: handleCancel,
          onSubmit: handleComplete,
        }}
        initialLangauge={language}
        labs={labs}
      />
    </PageLayout>
  );
}

const getRequestObject = (content: WithLanguage<FacultyEditorContent>) => {
  // startDate, endDate는 한영 동일
  const startDate = content.ko.startDate.toISOString();
  const endDate = content.ko.endDate.toISOString();
  const image = undefined; // 이미지는 따로 보내야 하므로 requestObj에서 제외

  return {
    ko: { ...content.ko, image, startDate, endDate },
    en: { ...content.en, image, startDate, endDate },
  };
};
