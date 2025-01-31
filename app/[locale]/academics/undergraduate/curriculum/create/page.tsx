import { revalidateTag } from 'next/cache';

import { postAcademicsByPostType } from '@/apis/v2/academics/[studentType]/[postType]';
import TimelineEditor from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_CURRICULUM } from '@/constants/network';
import { curriculum } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';
import { decodeFormDataFileName } from '@/utils/string';

const curriculumPath = getPath(curriculum);

export default function CurriculumCreatePage() {
  const onSubmit = async (formData: FormData) => {
    'use server';
    decodeFormDataFileName(formData, 'attachments');
    await postAcademicsByPostType('undergraduate', 'curriculum', formData);
    revalidateTag(FETCH_TAG_CURRICULUM);
  };

  return (
    <PageLayout title="전공 이수 표준 형태 추가" titleType="big">
      <TimelineEditor onSubmit={onSubmit} cancelPath={curriculumPath} />
    </PageLayout>
  );
}
