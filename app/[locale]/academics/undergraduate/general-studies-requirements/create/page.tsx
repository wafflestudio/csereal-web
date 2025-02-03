import { postGeneralStudiesAction } from '@/actions/academics';
import TimelineEditor from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { curriculum } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const curriculumPath = getPath(curriculum);

export default function GeneralStudiesCreatePage() {
  return (
    <PageLayout title="필수 교양 과목 추가" titleType="big">
      <TimelineEditor onSubmit={postGeneralStudiesAction} cancelPath={curriculumPath} />
    </PageLayout>
  );
}
