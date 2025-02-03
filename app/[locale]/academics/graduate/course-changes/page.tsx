import { deleteCourseChangesAction } from '@/actions/academics';
import { getAcademicsByPostType } from '@/apis/v2/academics/[studentType]/[postType]';
import TimelineViewer from '@/app/[locale]/academics/components/timeline/TimelineViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { FETCH_TAG_COURSE_CHANGES } from '@/constants/network';
import { graduateCourseChanges } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: graduateCourseChanges });
}

export default async function GraduateCourseChangesPage() {
  const changes = await getAcademicsByPostType(
    'graduate',
    'course-changes',
    FETCH_TAG_COURSE_CHANGES,
  );

  const onDelete = async (year: number) => {
    'use server';
    await deleteCourseChangesAction('graduate', year);
  };

  return (
    <PageLayout titleType="big">
      <TimelineViewer
        contents={changes}
        title={{ text: '교과목 변경 내역', unit: '학년도' }}
        deleteAction={onDelete}
      />
    </PageLayout>
  );
}
