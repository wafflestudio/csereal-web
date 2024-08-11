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
    const formData = contentToFormData('CREATE', { requestObject: {} });

    await postFacultyAction(formData, language);
  };

  return (
    <PageLayout title="교수진 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <FacultyEditor
        actions={{ type: 'CREATE', onCancel: handleCancel, onComplete: handleComplete }}
        initialFacultyStatus={status}
        initialLangauge={language}
        labs={labs}
      />
    </PageLayout>
  );
}
