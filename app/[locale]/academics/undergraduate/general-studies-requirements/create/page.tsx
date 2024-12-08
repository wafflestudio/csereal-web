import { postAcademicsByPostType } from '@/apis/v1/academics/[studentType]/[postType]';
import TimelineEditor from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { curriculum } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';
import { decodeFormDataFileName } from '@/utils/string';

const curriculumPath = getPath(curriculum);

export default function GeneralStudiesCreatePage() {
  const onSubmit = async (formData: FormData) => {
    'use server';
    decodeFormDataFileName(formData, 'attachments');
    await postAcademicsByPostType('undergraduate', 'general-studies-requirements', formData);
  };

  return (
    <PageLayout title="필수 교양 과목 추가" titleType="big">
      <TimelineEditor onSubmit={onSubmit} cancelPath={curriculumPath} />
    </PageLayout>
  );
}
