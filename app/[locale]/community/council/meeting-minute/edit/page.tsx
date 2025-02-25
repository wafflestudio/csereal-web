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

export default async function CouncilMinuteEditPage({ searchParams }: MinuteEditPageProps) {
  const year = Number((await searchParams).year);
  const index = Number((await searchParams).index);

  const data = await getCouncilMinute(year, index);

  return (
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
