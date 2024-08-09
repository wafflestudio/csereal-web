'use client';

import { putCurriculumAction } from '@/actions/academics';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getPath } from '@/utils/page';
import { curriculum } from '@/utils/segmentNode';

import TimelineEditor from '../../../helper/TimelineEditor';

const curriculumPath = getPath(curriculum);

export default function CurriculumEditPage() {
  return (
    <PageLayout title="전공 이수 표준 형태 편집" titleType="big">
      <TimelineEditor action={putCurriculumAction} fallbackPathname={curriculumPath} />
    </PageLayout>
  );
}
