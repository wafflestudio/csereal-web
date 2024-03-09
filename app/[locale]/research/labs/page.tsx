import { getResearchLabs } from '@/apis/research';

import ResearchLabList from '@/app/[locale]/research/labs/ResearchLabList';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function ResearchLabsPage() {
  const labInformations = await getResearchLabs();

  return (
    <PageLayout titleType="big">
      <ResearchLabList labInfos={labInformations} />
    </PageLayout>
  );
}
