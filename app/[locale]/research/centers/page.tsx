import { getResearchCenters } from '@/apis/research';

import ResearchCentersPageContent from '@/app/[locale]/research/centers/ResearchCentersPageContent';

export default async function ResearchCentersPage() {
  const centers = await getResearchCenters();
  return <ResearchCentersPageContent centers={centers} />;
}
