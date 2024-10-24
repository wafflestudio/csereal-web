'use client';

import { postCourseChangesAction } from '@/actions/academics';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getPath } from '@/utils/page';
import { graduateCourseChanges } from '@/utils/segmentNode';

import TimelineEditor from '../../../helper/timeline/TimelineEditor';

const courseChangesPath = getPath(graduateCourseChanges);

export default function GraduateCourseChangesCreatePage() {
  return (
    <PageLayout title="대학원 교과목 변경 내역 추가" titleType="big">
      <TimelineEditor
        submitAction={(data) => postCourseChangesAction('graduate', data)}
        fallbackPathname={courseChangesPath}
      />
    </PageLayout>
  );
}
