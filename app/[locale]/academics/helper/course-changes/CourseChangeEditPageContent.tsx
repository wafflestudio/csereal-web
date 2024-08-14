'use client';

import { putCourseChangesAction } from '@/actions/academics';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { CourseChange, StudentType } from '@/types/academics';

import TimelineEditor from '../timeline/TimelineEditor';

export default function CourseChangesEditPageContent({
  type,
  initContent,
  courseChangePath,
}: {
  type: StudentType;
  initContent: CourseChange;
  courseChangePath: string;
}) {
  return (
    <PageLayout
      title={`${type === 'undergraduate' ? '학부' : '대학원'} 교과목 변경 내역 편집`}
      titleType="big"
    >
      <TimelineEditor
        submitAction={(data) => putCourseChangesAction(type, data)}
        fallbackPathname={courseChangePath}
        initialContent={initContent}
      />
    </PageLayout>
  );
}
