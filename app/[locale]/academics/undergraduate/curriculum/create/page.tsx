'use client';

import { postCurriculumAction } from '@/actions/academics';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getPath } from '@/utils/page';
import { curriculum } from '@/utils/segmentNode';

import TimelineEditor from '../../../helper/timeline/TimelineEditor';

const curriculumPath = getPath(curriculum);

export default function CurriculumCreatePage() {
  return (
    <PageLayout title="전공 이수 표준 형태 추가" titleType="big">
      <TimelineEditor
        submitAction={(_, formData) => postCurriculumAction(formData)}
        fallbackPathname={curriculumPath}
        pageName="전공 이수 표준 형태"
      />
    </PageLayout>
  );
}
