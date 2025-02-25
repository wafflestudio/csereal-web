import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilMinute } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

import CouncilMeetingMinuteEditor from '../MinuteEditor';

interface MinuteCreatePageProps {
  searchParams: Promise<{ year?: string }>;
}

const minutePath = getPath(councilMinute);

export default async function CouncilMinuteCreatePage(props: MinuteCreatePageProps) {
  const searchParams = await props.searchParams;

  const year = Number(searchParams.year);
  if (Number.isNaN(year)) throw new Error('/meeting-minute?year=[year]: year가 숫자가 아닙니다.');

  return (
    // TODO: 영문 번역
    <PageLayout title={`${year ? `${year}년 ` : ''}학생회 회의록 추가`} titleType="big">
      <CouncilMeetingMinuteEditor
        option={{ type: 'CREATE', defaultValues: { year } }}
        cancelPath={minutePath}
      />
    </PageLayout>
  );
}
