import { postAcademicsByPostType } from '@/apis/v2/academics/[studentType]/[postType]';
import TimelineEditor from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { undergraduateCourseChanges } from '@/constants/segmentNode';
import { redirectKo } from '@/i18n/routing';
import { getPath } from '@/utils/page';

const courseChangesPath = getPath(undergraduateCourseChanges);

export default function Page() {
  const onSubmit = async (formData: FormData) => {
    'use server';
    await postAcademicsByPostType('graduate', 'course-changes', formData);
    redirectKo(courseChangesPath);
  };

  return (
    <PageLayout title="대학원 교과목 변경 내역 추가" titleType="big">
      <TimelineEditor cancelPath={courseChangesPath} onSubmit={onSubmit} />
    </PageLayout>
  );
}
