import { putCurriculumAction } from '@/actions/academics';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Curriculum } from '@/types/academics';

import { getPath } from '@/utils/page';
import { curriculum } from '@/utils/segmentNode';

import TimelineEditor from '../../../helper/timeline/TimelineEditor';

const curriculumPath = getPath(curriculum);

export default function CurriculumEditPageContent({ initContent }: { initContent: Curriculum }) {
  return (
    <PageLayout title="전공 이수 표준 형태 편집" titleType="big">
      <TimelineEditor
        submitAction={putCurriculumAction}
        fallbackPathname={curriculumPath}
        initialContent={initContent}
      />
    </PageLayout>
  );
}
