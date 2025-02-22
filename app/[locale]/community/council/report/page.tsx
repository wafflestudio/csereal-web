import { getCouncilReportList } from '@/apis/v2/council/report';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export const dynamic = 'force-dynamic';

export default async function CouncilIntroPage() {
  const list = await getCouncilReportList();

  return <PageLayout titleType="big">{JSON.stringify(list)}</PageLayout>;
}
