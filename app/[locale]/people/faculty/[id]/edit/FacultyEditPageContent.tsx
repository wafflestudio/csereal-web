'use client';

import { useRouter } from '@/navigation';

import FacultyEditor from '@/components/editor/FacultyEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Language, WithLanguage } from '@/types/language';
import { Faculty } from '@/types/people';
import { SimpleResearchLab } from '@/types/research';

import { getPath } from '@/utils/page';
import { faculty } from '@/utils/segmentNode';

const facultyPath = getPath(faculty);

export default function FacultyEditPageContent({
  language,
  id,
  data,
  labs,
}: {
  language: Language;
  id: { ko: number; en: number };
  data: Faculty;
  labs: WithLanguage<SimpleResearchLab[]>;
}) {
  const router = useRouter();

  const handleCancel = () => router.push(`${facultyPath}/${id[language]}`);

  const handleComplete = async () => {};

  return (
    <PageLayout title="교수진 편집" titleType="big" titleMargin="mb-[2.25rem]" hideNavbar>
      <FacultyEditor
        // TODO: 영어 데이터 api 정해지면 en도 별도로 생성
        initialContent={data}
        actions={{
          type: 'EDIT',
          onCancel: handleCancel,
          onComplete: handleComplete,
        }}
        initialLangauge={language}
        labs={labs}
      />
    </PageLayout>
  );
}
