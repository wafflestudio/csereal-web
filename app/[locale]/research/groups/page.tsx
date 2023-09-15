export const dynamic = 'force-static';

import { getResearchGroups } from '@/apis/research';

// 추후에 api 연결하면 주석 해제하고 원상복구

// import SelectionList from '@/components/common/selection/SelectionList';
// import PageLayout from '@/components/layout/pageLayout/PageLayout';
// import ResearchGroupDetails from '@/components/research/groups/ResearchGroupDetails';
import ResearchGroupsPageContent from '@/components/research/groups/ResearchGroupsPageContent';

// import { researchGroups } from '@/types/page';
// import { ResearchGroup } from '@/types/research';

// import { findSelectedItem } from '@/utils/findSelectedItem';
// import { getPath } from '@/utils/page';

interface ResearchGroupsPageProps {
  searchParams: { selected?: string };
}

// const researchGroupsPath = getPath(researchGroups);

export default async function ResearchGroupsPage({ searchParams }: ResearchGroupsPageProps) {
  const { description, groups } = await getResearchGroups();
  return <ResearchGroupsPageContent description={description} groups={groups} />;
}

// function ResearchDescription({ description }: { description: string }) {
//   return (
//     <p className="mb-[3.25rem] font-noto text-sm tracking-wide leading-[1.625rem]">{description}</p>
//   );
// }
