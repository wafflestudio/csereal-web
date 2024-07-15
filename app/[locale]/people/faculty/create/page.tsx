'use client';

import { postFacultyAction } from '@/actions/people';
import { useRouter } from '@/navigation';

import FacultyEditor, {
  FacultyEditorContent,
  FacultyEditorContentDetail,
} from '@/components/editor/FacultyEditor';
import { isLocalImage } from '@/components/editor/PostEditorTypes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Locale } from '@/types/locale';
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
  params: { locale: Locale };
  searchParams: { status?: FacultyStatus };
}) {
  const router = useRouter();

  const handleCancel = () => router.push(status === 'INACTIVE' ? emeritusFacultyPath : facultyPath);

  const handleComplete = async (content: FacultyEditorContent) => {
    console.log(content);
    validateFacultyForm(content);
    const formDataKo = contentToFormData(content.ko);
    const formDataEn = contentToFormData(content.en);
    postFacultyAction({ ko: formDataKo, en: formDataEn });
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

const contentToFormData = (content: FacultyEditorContentDetail) => {
  const image = content.image && isLocalImage(content.image) ? content.image.file : null;

  const formData = new FormData();
  const isInactiveFaculty = content.status === 'INACTIVE';

  formData.append(
    'request',
    new Blob(
      [
        JSON.stringify({
          status: content.status,
          language: content.language,
          name: content.name,
          academicRank: content.academicRank,
          phone: content.phone,
          email: content.email,
          office: content.office,
          fax: content.fax,
          website: content.website,
          educations: content.educations.map((edu) => edu.value),
          researchAreas: content.researchAreas.map((area) => area.value),
          careers: content.careers.map((career) => career.value),
          labId: !isInactiveFaculty ? content.labId : undefined,
          startDate: isInactiveFaculty ? content.startDate.toISOString() : undefined,
          endDate: isInactiveFaculty ? content.endDate.toISOString() : undefined,
        }),
      ],
      {
        type: 'application/json',
      },
    ),
  );

  if (image) {
    formData.append('mainImage', image);
  }

  return formData;
};
