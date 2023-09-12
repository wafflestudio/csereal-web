export const dynamic = 'force-static';

import { getResearchLabs } from '@/apis/research';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import ResearchLabList from '@/components/research/labs/ResearchLabList';

export default async function ResearchLabsPage() {
  const labInformations = await getResearchLabs();

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <ResearchLabList labInfos={labInformations} />
    </PageLayout>
  );
}
