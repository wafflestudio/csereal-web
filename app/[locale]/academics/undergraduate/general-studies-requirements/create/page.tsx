'use client';

import { postCurriculumAction } from '@/actions/academics';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getPath } from '@/utils/page';
import { curriculum } from '@/utils/segmentNode';

import TimelineEditor from '../../../helper/TimelineEditor';

const curriculumPath = getPath(curriculum);

export default function CurriculumCreatePage() {
  return (
    <PageLayout title="필수 교양 과목 추가" titleType="big">
      <TimelineEditor action={postCurriculumAction} fallbackPathname={curriculumPath} />
    </PageLayout>
  );
}
