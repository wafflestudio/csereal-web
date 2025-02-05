import { postCurriculumAction } from '@/actions/academics';
import TimelineEditor from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { curriculum } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const curriculumPath = getPath(curriculum);

export default function CurriculumCreatePage() {
  return (
    <PageLayout title="전공 이수 표준 형태 추가" titleType="big">
      <TimelineEditor onSubmit={postCurriculumAction} cancelPath={curriculumPath} />
    </PageLayout>
  );
}
