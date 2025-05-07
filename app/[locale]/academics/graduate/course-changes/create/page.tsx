import { postCourseChangesAction } from '@/actions/academics';
import TimelineEditor from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { graduateCourseChanges } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';
import { decodeFormDataFileName } from '@/utils/string';

const courseChangesPath = getPath(graduateCourseChanges);

export default function Page() {
  const onSubmit = async (formData: FormData) => {
    'use server';
    decodeFormDataFileName(formData, 'attachments');
    await postCourseChangesAction('graduate', formData);
  };

  return (
    <PageLayout title="대학원 교과목 변경 내역 추가" titleType="big">
      <TimelineEditor cancelPath={courseChangesPath} onSubmitAction={onSubmit} />
    </PageLayout>
  );
}
