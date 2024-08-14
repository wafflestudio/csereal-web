'use client';

import { deleteCourseChangesAction } from '@/actions/academics';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { CourseChange, StudentType } from '@/types/academics';

import TimelineViewer from '../timeline/TimelineViewer';

export default function CourseChangesPageContent({
  type,
  changes,
}: {
  type: StudentType;
  changes: CourseChange[];
}) {
  return (
    <PageLayout titleType="big">
      <TimelineViewer
        contents={changes}
        title={{
          text: '교과목 변경 내역',
          unit: '학년도',
        }}
        deleteAction={(year) => deleteCourseChangesAction(type, year)}
      />
    </PageLayout>
  );
}
