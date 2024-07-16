import { useRouter } from '@/navigation';

import FacultyEditor, { FacultyEditorContentDetail } from '@/components/editor/FacultyEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Locale } from '@/types/locale';
import { Faculty } from '@/types/people';

import { getPath } from '@/utils/page';
import { faculty } from '@/utils/segmentNode';

const facultyPath = getPath(faculty);

export default function FacultyEditPageContent({
  locale,
  id,
  data,
}: {
  locale: Locale;
  id: { ko: number; en: number };
  data: Faculty;
}) {
  const router = useRouter();

  const initialContent: FacultyEditorContentDetail = {
    name: data.name,
    academicRank: data.academicRank,
    careers: data.careers?.map((career, i) => ({ id: i, value: career })) ?? [],
    educations: data.researchAreas?.map((edu, i) => ({ id: i, value: edu })) ?? [],
    email: data.email ?? '',
    status: 'ACTIVE',
    language: 'ko',
    image: data.imageURL ? { type: 'UPLOADED_IMAGE', url: data.imageURL } : null,
    phone: data.phone ?? '',
    office: data.office ?? '',
    fax: data.fax ?? '',
    website: data.website ?? '',
    researchAreas: data.researchAreas?.map((area, i) => ({ id: i, value: area })) ?? [],
    labId: data.labId ?? null,
    startDate: new Date(),
    endDate: new Date(),
  };

  const handleCancel = () => router.push(`${facultyPath}/${id[locale]}`);

  const handleComplete = async () => {};

  return (
    <PageLayout title="교수진 편집" titleType="big" titleMargin="mb-[2.25rem]" hideNavbar>
      <FacultyEditor
        initialContent={{ ko: initialContent, en: initialContent }}
        actions={{
          type: 'EDIT',
          onCancel: handleCancel,
          onComplete: handleComplete,
        }}
        initialLangauge={locale}
        initialFacultyStatus="ACTIVE"
      />
    </PageLayout>
  );
}
