import { postCourseChangesAction } from '@/actions/academics';
import TimelineEditor from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { undergraduateCourseChanges } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const courseChangesPath = getPath(undergraduateCourseChanges);

export default function Page() {
  const onSubmit = async (formData: FormData) => {
    'use server';
    await postCourseChangesAction('undergraduate', formData);
  };

  return (
    <PageLayout title="대학원 교과목 변경 내역 추가" titleType="big">
      <TimelineEditor cancelPath={courseChangesPath} onSubmit={onSubmit} />
    </PageLayout>
  );
}
