export const dynamic = 'force-dynamic';

import { getResearchGroups } from '@/apis/research';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import ResearchGroupDetails from '@/components/research/groups/ResearchGroupDetails';

import { researchGroups } from '@/types/page';
import { ResearchGroup } from '@/types/research';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';

interface ResearchGroupsPageProps {
  searchParams: { selected?: string };
}

const researchGroupsPath = getPath(researchGroups);

export default async function ResearchGroupsPage({ searchParams }: ResearchGroupsPageProps) {
  const { description, groups } = await getResearchGroups();
  const selectedGroup = findSelectedItem<ResearchGroup>(
    groups,
    decodeURI(searchParams.selected ?? ''),
    groups[0]?.name,
  );

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <ResearchDescription description={description} />
      <SelectionList
        names={groups.map((group) => group.name)}
        selectedItemName={selectedGroup?.name ?? ''}
        path={researchGroupsPath}
        listGridColumnClass="grid-cols-[13.25rem_8.75rem_13.75rem_14.5rem]"
      />
      {selectedGroup ? (
        <ResearchGroupDetails group={selectedGroup} />
      ) : (
        <p>
          <b>{`'${searchParams.selected}'`}</b> 연구그룹은 존재하지 않습니다.
        </p>
      )}
    </PageLayout>
  );
}

function ResearchDescription({ description }: { description: string }) {
  return (
    <p className="mb-[3.25rem] font-noto text-sm tracking-wide leading-[1.625rem]">{description}</p>
  );
}
