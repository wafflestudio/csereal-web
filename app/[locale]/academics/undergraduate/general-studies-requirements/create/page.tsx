import { postGeneralStudiesAction } from '@/actions/academics';
import TimelineEditor from '@/app/[locale]/academics/components/timeline/TimelineEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { generalStudies } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

const generalStudiesPath = getPath(generalStudies);

export default function GeneralStudiesCreatePage() {
  return (
    <PageLayout title="필수 교양 과목 추가" titleType="big">
      <TimelineEditor onSubmitAction={postGeneralStudiesAction} cancelPath={generalStudiesPath} />
    </PageLayout>
  );
}
