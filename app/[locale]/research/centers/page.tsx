import { getResearchCenters } from '@/apis/research';

import ResearchCentersPageContent from '@/app/[locale]/research/centers/ResearchCentersPageContent';

export default async function ResearchCentersPage({
  searchParams,
}: {
  searchParams: { selected?: string };
}) {
  const centers = await getResearchCenters();
  return <ResearchCentersPageContent centers={centers} selected={searchParams.selected} />;
}
