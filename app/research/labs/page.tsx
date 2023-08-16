import { getResearchLabs, getResearchLabsMock } from '@/apis/research';

import PageLayout from '@/components/layout/PageLayout';
import ResearchLabList from '@/components/research/ResearchLabList';

export default async function ResearchLabsPage() {
  // const labInformations = await getResearchLabs()
  const labInformations = await getResearchLabsMock();

  return (
    <PageLayout titleType="big">
      <ResearchLabList labInfos={labInformations} />
    </PageLayout>
  );
}
