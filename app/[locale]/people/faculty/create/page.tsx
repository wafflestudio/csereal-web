'use client';

import { postFacultyAction } from '@/actions/people';
import { useRouter } from '@/navigation';

import FacultyEditor, { FacultyEditorContent } from '@/components/editor/FacultyEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Language, WithLanguage } from '@/types/language';
import { FacultyStatus } from '@/types/people';

import { validateFacultyForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty } from '@/utils/segmentNode';

const facultyPath = getPath(faculty);
const emeritusFacultyPath = getPath(emeritusFaculty);

export default function FacultyCreatePage({
  params: { locale },
  searchParams: { status = 'ACTIVE' },
}: {
  params: { locale: Language };
  searchParams: { status?: FacultyStatus };
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
        initialLangauge={locale}
      />
    </PageLayout>
  );
}
