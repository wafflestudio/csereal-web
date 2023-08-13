import { getResearchLabs, getResearchLabsMock } from '@/apis/research';

import PageLayout from '@/components/layout/PageLayout';
import ResearchLaboratoryList from '@/components/research/ResearchLaboratoryList';

export default async function ResearchLaboratoriesPage() {
  // const labInformations = await getResearchLabs()
  const labInformations = await getResearchLabsMock();

  return (
    <PageLayout titleSize="text-2xl">
      <ResearchLaboratoryList labInfos={labInformations} />
    </PageLayout>
  );
}
