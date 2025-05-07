import { postCourseChangesAction } from '@/actions/academics';
import TimelineEditor from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { undergraduateCourseChanges } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';
import { decodeFormDataFileName } from '@/utils/string';

const courseChangesPath = getPath(undergraduateCourseChanges);

export default function UndergraduateCourseChangesCreatePage() {
  const onSubmit = async (formData: FormData) => {
    'use server';
    decodeFormDataFileName(formData, 'attachments');
    await postCourseChangesAction('undergraduate', formData);
  };

  return (
    <PageLayout title="학부 교과목 변경 내역 추가" titleType="big">
      <TimelineEditor cancelPath={courseChangesPath} onSubmitAction={onSubmit} />
    </PageLayout>
  );
}
