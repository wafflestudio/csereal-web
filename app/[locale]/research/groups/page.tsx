export const dynamic = 'force-static';

import { getResearchGroups } from '@/apis/research';

// 추후에 api 연결하면 주석 해제하고 원상복구

// import SelectionList from '@/components/common/selection/SelectionList';
// import PageLayout from '@/components/layout/pageLayout/PageLayout';
// import ResearchGroupDetails from '@/components/research/groups/ResearchGroupDetails';
import ResearchGroupsPageContent from '@/app/[locale]/research/groups/ResearchGroupsPageContent';

// import { researchGroups } from '@/types/page';
// import { ResearchGroup } from '@/types/research';

// import { findSelectedItem } from '@/utils/findSelectedItem';
// import { getPath } from '@/utils/page';

interface ResearchGroupsPageProps {
  searchParams: { selected?: string };
}

// const researchGroupsPath = getPath(researchGroups);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function ResearchGroupsPage({ searchParams }: ResearchGroupsPageProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { description, groups } = await getResearchGroups();
  return <ResearchGroupsPageContent groups={groups} />;
}

// function ResearchDescription({ description }: { description: string }) {
//   return (
//     <p className="mb-[3.25rem]  text-sm tracking-wide leading-[1.625rem]">{description}</p>
//   );
// }
