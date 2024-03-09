import { getResearchGroups } from '@/apis/research';

import ResearchGroupsPageContent from '@/app/[locale]/research/groups/ResearchGroupsPageContent';

export default async function ResearchGroupsPage() {
  const { groups } = await getResearchGroups();
  return <ResearchGroupsPageContent groups={groups} />;
}
