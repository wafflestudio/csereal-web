import { postAcademicsByPostType } from '@/apis/v1/academics/[studentType]/[postType]';
import TimelineEditor from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { undergraduateCourseChanges } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const courseChangesPath = getPath(undergraduateCourseChanges);

export default function UndergraduateCourseChangesCreatePage() {
  const onSubmit = async (formData: FormData) => {
    'use server';
    await postAcademicsByPostType('undergraduate', 'course-changes', formData);
  };

  return (
    <PageLayout title="학부 교과목 변경 내역 추가" titleType="big">
      <TimelineEditor cancelPath={courseChangesPath} onSubmit={onSubmit} />
    </PageLayout>
  );
}
