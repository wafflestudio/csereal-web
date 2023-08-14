import { getResearchLabs, getResearchLabsMock } from '@/apis/research';

import PageLayout from '@/components/layout/PageLayout';
import ResearchLabList from '@/components/research/ResearchLabList';

export default async function ResearchLaboratoriesPage() {
  // const labInformations = await getResearchLabs()
  const labInformations = await getResearchLabsMock();

  return (
    <PageLayout titleSize="text-2xl">
      <ResearchLabList labInfos={labInformations} />
    </PageLayout>
  );
}
