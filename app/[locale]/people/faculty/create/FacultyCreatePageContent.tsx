'use client';

import { postFacultyAction } from '@/actions/people';
import { useRouter } from '@/navigation';

import FacultyEditor, { FacultyEditorContent } from '@/components/editor/FacultyEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Language, WithLanguage } from '@/types/language';
import { FacultyStatus } from '@/types/people';
import { SimpleResearchLab } from '@/types/research';

import { contentToFormData } from '@/utils/formData';
import { validateFacultyForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty } from '@/utils/segmentNode';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast } from '@/utils/toast';

const facultyPath = getPath(faculty);
const emeritusFacultyPath = getPath(emeritusFaculty);

export default function FacultyCreatePageContent({
  status,
  language,
  labs,
}: {
  status: FacultyStatus;
  language: Language;
  labs: WithLanguage<SimpleResearchLab[]>;
}) {
  const router = useRouter();

  const handleCancel = () => router.push(status === 'INACTIVE' ? emeritusFacultyPath : facultyPath);

  const handleComplete = async (content: WithLanguage<FacultyEditorContent>) => {
    validateFacultyForm(content);
    const formData = contentToFormData('CREATE', {
      requestObject: getRequestObject(content),
      image: content.ko.image,
    });

    try {
      handleServerAction(await postFacultyAction(formData, language));
    } catch {
      errorToast('오류가 발생했습니다');
    }
  };

  return (
    <PageLayout title="교수진 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <FacultyEditor
        actions={{ type: 'CREATE', onCancel: handleCancel, onSubmit: handleComplete }}
        initialFacultyStatus={status}
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
