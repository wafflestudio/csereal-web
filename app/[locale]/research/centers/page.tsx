export const dynamic = 'force-static';

import { getResearchCenters } from '@/apis/research';

// 추후에 api 연결하면 주석 해제하고 원상복구

// import SelectionList from '@/components/common/selection/SelectionList';
// import PageLayout from '@/components/layout/pageLayout/PageLayout';
// import ResearchCenterDetails from '@/components/research/centers/ResearchCenterDetails';
import ResearchCentersPageContent from '@/components/research/centers/ResearchCentersPageContent';

// import { researchCenters } from '@/types/page';
// import { ResearchCenter } from '@/types/research';

// import { findSelectedItem } from '@/utils/findSelectedItem';
// import { getPath } from '@/utils/page';

interface ResearchCentersPageProps {
  searchParams: { selected?: string };
}

// const researchCentersPath = getPath(researchCenters);

export default async function ResearchCentersPage({ searchParams }: ResearchCentersPageProps) {
  const centers = await getResearchCenters();
  return <ResearchCentersPageContent centers={centers} />;
}
