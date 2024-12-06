'use client';

import { postGeneralStudiesAction } from '@/actions/academics';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getPath } from '@/utils/page';
import { curriculum } from '@/utils/segmentNode';

import TimelineEditor from '../../../components/timeline/TimelineEditor';

const curriculumPath = getPath(curriculum);

export default function GeneralStudiesCreatePage() {
  return (
    <PageLayout title="필수 교양 과목 추가" titleType="big">
      <TimelineEditor submitAction={postGeneralStudiesAction} fallbackPathname={curriculumPath} />
    </PageLayout>
  );
}
