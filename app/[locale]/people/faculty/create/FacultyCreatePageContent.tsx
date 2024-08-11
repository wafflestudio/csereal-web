'use client';

import { postFacultyAction } from '@/actions/people';
import FacultyEditor, { FacultyEditorContent } from '@/components/editor/FacultyEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { useRouter } from '@/navigation';
import { Language, WithLanguage } from '@/types/language';
import { FacultyStatus } from '@/types/people';
import { SimpleResearchLab } from '@/types/research';
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
    postFacultyAction();
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
