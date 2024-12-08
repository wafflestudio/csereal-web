import { revalidateTag } from 'next/cache';

import { Curriculum } from '@/apis/types/academics';
import { putAcademicsByPostType } from '@/apis/v1/academics/[studentType]/[postType]';
import TimelineEditor, {
  TimelineFormData,
} from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_CURRICULUM } from '@/constants/network';
import { curriculum } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const curriculumPath = getPath(curriculum);

export default function CurriculumEditPageContent({ initContent }: { initContent: Curriculum }) {
  const defaultValues: TimelineFormData = {
    year: initContent.year,
    description: initContent.description,
    file: [],
  };

  const onSubmit = async (formData: FormData) => {
    'use server';
    await putAcademicsByPostType('undergraduate', 'curriculum', formData);
    revalidateTag(FETCH_TAG_CURRICULUM);
  };

  return (
    <PageLayout title="전공 이수 표준 형태 편집" titleType="big">
      <TimelineEditor
        onSubmit={onSubmit}
        cancelPath={curriculumPath}
        defaultValues={defaultValues}
      />
    </PageLayout>
  );
}
