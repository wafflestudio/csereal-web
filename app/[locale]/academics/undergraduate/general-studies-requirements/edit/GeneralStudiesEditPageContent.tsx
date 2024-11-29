import { putGeneralStudiesAction } from '@/actions/academics';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { TimelineContent } from '@/types/academics';
import { getPath } from '@/utils/page';
import { curriculum } from '@/utils/segmentNode';

import TimelineEditor from '../../../helper/timeline/TimelineEditor';

const curriculumPath = getPath(curriculum);

export default function GeneralStudiesEditPageContent({
  initContent,
}: {
  initContent: TimelineContent;
}) {
  return (
    <PageLayout title="필수 교양 과목 편집" titleType="big">
      <TimelineEditor
        submitAction={putGeneralStudiesAction}
        fallbackPathname={curriculumPath}
        initialContent={initContent}
      />
    </PageLayout>
  );
}
