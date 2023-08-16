'use client';

import useSWR from 'swr';

import { getResearchGroupsMock } from '@/apis/research';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import ResearchGroupDetails from '@/components/research/ResearchGroupDetails';

import { researchGroups } from '@/types/page';
import { ResearchGroup } from '@/types/research';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';

interface ResearchGroupsPageProps {
  searchParams: { selected?: string };
}

const researchGroupsPath = getPath(researchGroups);

export default function ResearchGroupsPage({ searchParams }: ResearchGroupsPageProps) {
  const { data: { description = '', groups = [] } = {} } = useSWR(
    { url: '/research/groups' },
    getResearchGroupsMock,
  );
  const selectedGroup = findSelectedItem<ResearchGroup>(
    groups,
    decodeURI(searchParams.selected ?? ''),
  );

  return (
    <PageLayout titleType="big">
      <ResearchDescription description={description} />
      <SelectionList
        names={groups.map((group) => group.name)}
        selectedItemName={selectedGroup?.name ?? ''}
        path={researchGroupsPath}
        gridColumnClass="grid-cols-[13.5rem_10.75rem_14.25rem_11.75rem]"
      />
      {selectedGroup && <ResearchGroupDetails group={selectedGroup} />}
    </PageLayout>
  );
}

function ResearchDescription({ description }: { description: string }) {
  return (
    <p className="mb-[3.25rem] font-noto text-sm tracking-wide leading-[1.625rem]">{description}</p>
  );
}
