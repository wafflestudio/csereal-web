import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilMinute } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

import MinuteEditor from '../MinuteEditor';

interface MinuteCreatePageProps {
  searchParams: Promise<{ year?: string }>;
}

const minutePath = getPath(councilMinute);

export default async function CouncilMinuteCreatePage({ searchParams }: MinuteCreatePageProps) {
  const { year } = await searchParams;

  return (
    <PageLayout title={`${year ? `${year}년 ` : ''}학생회 회의록 추가`} titleType="big">
      <MinuteEditor
        option={{ type: 'CREATE', defaultValues: year ? { year: Number(year) } : undefined }}
        cancelPath={minutePath}
      />
    </PageLayout>
  );
}
