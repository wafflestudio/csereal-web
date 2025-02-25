import { getCouncilMinute } from '@/apis/v2/council/meeting-minute';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilMinute } from '@/constants/segmentNode';
import { getEditorFile } from '@/utils/formData';
import { getPath } from '@/utils/page';

import CouncilMeetingMinuteEditor from '../MinuteEditor';

interface MinuteEditPageProps {
  searchParams: Promise<{ year: string; index: string }>;
}

const minutePath = getPath(councilMinute);

export default async function CouncilMinuteEditPage(props: MinuteEditPageProps) {
  const searchParams = await props.searchParams;
  const year = Number(searchParams.year);
  const index = Number(searchParams.index);

  if (Number.isNaN(year) || Number.isNaN(index))
    throw new Error('/meeting-minute?year=[year]&index=[index]: year나 index가 숫자가 아닙니다.');

  const data = await getCouncilMinute(year, index);

  return (
    // TODO: 영문 번역
    <PageLayout title={`${year}년 학생회 ${index}차 회의록 편집`} titleType="big">
      <CouncilMeetingMinuteEditor
        option={{
          type: 'EDIT',
          defaultValues: { year, index, file: getEditorFile(data.attachments) },
        }}
        cancelPath={minutePath}
      />
    </PageLayout>
  );
}
