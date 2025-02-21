import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilMinute } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';
import MinuteEditor from '../MinuteEditor';

const minutePath = getPath(councilMinute);

export default function CouncilMinuteCreatePage() {
  return (
    <PageLayout title="학생회 회의록 추가" titleType="big">
      <MinuteEditor cancelPath={minutePath} />
    </PageLayout>
  );
}
