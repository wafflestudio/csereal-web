'use client';

import { postCourseChangesAction } from '@/actions/academics';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getPath } from '@/utils/page';
import { undergraduateCourseChanges } from '@/utils/segmentNode';

import TimelineEditor from '../../../helper/TimelineEditor';

const courseChangesPath = getPath(undergraduateCourseChanges);

export default function UndergraduateCourseChangesCreatePage() {
  return (
    <PageLayout title="학부 교과목 변경 내역 추가" titleType="big">
      <TimelineEditor
        action={(data) => postCourseChangesAction('undergraduate', data)}
        fallbackPathname={courseChangesPath}
      />
    </PageLayout>
  );
}
