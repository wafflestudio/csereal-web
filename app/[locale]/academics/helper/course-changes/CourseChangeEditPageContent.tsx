'use client';

import { putCourseChangesAction } from '@/actions/academics';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { StudentType, TimelineContent } from '@/types/academics';

import TimelineEditor from '../timeline/TimelineEditor';

export default function CourseChangesEditPageContent({
  type,
  initContent,
  courseChangePath,
}: {
  type: StudentType;
  initContent: TimelineContent;
  courseChangePath: string;
}) {
  return (
    <PageLayout
      title={`${type === 'undergraduate' ? '학부' : '대학원'} 교과목 변경 내역 편집`}
      titleType="big"
    >
      <TimelineEditor
        submitAction={(year, formData) => putCourseChangesAction(type, year, formData)}
        fallbackPathname={courseChangePath}
        initialContent={initContent}
      />
    </PageLayout>
  );
}
