'use client';

import useSWR from 'swr';

import { ResearchGroup, getResearchGroupsMock } from '@/apis/research';

import SelectionList from '@/components/common/SelectionList';
import PageLayout from '@/components/layout/PageLayout';
import ResearchGroupDetails from '@/components/research/ResearchGroupDetails';

import { researchGroups } from '@/types/page';

import { getPath } from '@/utils/page';

interface ResearchGroupsPageProps {
  searchParams: { selected?: string };
}

const researchGroupsPath = getPath(researchGroups);

const findSelectedItem = <T extends { name: string }>(
  items: T[],
  selectedItemName: string,
  defaultItemName?: string,
) => {
  const selectedName = selectedItemName || defaultItemName || items[0]?.name;
  return items.find((item) => item.name === selectedName);
};

export default function ResearchGroupsPage({ searchParams }: ResearchGroupsPageProps) {
  const { data: { description = '', groups = [] } = {} } = useSWR(
    { url: '/research/groups' },
    getResearchGroupsMock,
  );
  const selectedGroup = findSelectedItem<ResearchGroup>(
    groups,
    decodeURI(searchParams.selected ?? ''),
  );
  console.log('ren');

  return (
    <PageLayout currentPage={researchGroups} title={researchGroups.name} titleSize="text-2xl">
      <ResearchDescription description={description} />
      <SelectionList
        names={groups.map((group) => group.name)}
        selectedItemName={selectedGroup?.name ?? ''}
        path={researchGroupsPath}
      />
      {selectedGroup && <ResearchGroupDetails group={selectedGroup} />}
    </PageLayout>
  );
}

function ResearchDescription({ description }: { description: string }) {
  return (
    <p className="mb-9 font-noto text-sm tracking-wide leading-[1.625rem]">{description}</p>
  );
}
