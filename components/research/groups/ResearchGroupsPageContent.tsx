'use client';

import { useState } from 'react';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { researchGroups } from '@/types/page';
import { ResearchGroup } from '@/types/research';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';

import ResearchGroupDetails from './ResearchGroupDetails';

const researchGroupsPath = getPath(researchGroups);

interface ResearchGroupsPageContentProps {
  groups: ResearchGroup[];
  description: string;
}

export default function ResearchGroupsPageContent({
  groups,
  description,
}: ResearchGroupsPageContentProps) {
  const [selected, setSelected] = useState<string>('');
  const selectedGroup = findSelectedItem<ResearchGroup>(
    groups,
    decodeURI(selected ?? ''),
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
        setSelected={setSelected}
      />
      {selectedGroup ? (
        <ResearchGroupDetails group={selectedGroup} />
      ) : (
        <p>
          <b>{`'${selected}'`}</b> 연구그룹은 존재하지 않습니다.
        </p>
      )}
    </PageLayout>
  );
}

function ResearchDescription({ description }: { description: string }) {
  return <p className="mb-[3.25rem] text-sm tracking-wide leading-[1.625rem]">{description}</p>;
}
