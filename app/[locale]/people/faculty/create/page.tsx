'use client';

import { useRouter } from '@/navigation';

import FacultyEditor, { FacultyEditorContent } from '@/components/editor/FacultyEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { validateFacultyForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { faculty } from '@/utils/segmentNode';

const facultyPath = getPath(faculty);

export default function FacultyCreatePage() {
  const router = useRouter();

  const handleCancel = () => router.push(facultyPath);

  const handleComplete = async (content: FacultyEditorContent) => {
    console.log(content);
    validateFacultyForm(content);
  };

  return (
    <PageLayout title="교수진 추가" titleType="big" titleMargin="mb-[2.75rem]" hideNavbar>
      <FacultyEditor
        actions={{ type: 'CREATE', onCancel: handleCancel, onComplete: handleComplete }}
        initialFacultyStatus="ACTIVE"
      />
    </PageLayout>
  );
}
