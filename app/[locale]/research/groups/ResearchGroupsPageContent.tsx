'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { ResearchGroup } from '@/types/research';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';
import { researchGroups } from '@/utils/segmentNode';

import ResearchGroupDetails from './ResearchGroupDetails';

const researchGroupsPath = getPath(researchGroups);

interface ResearchGroupsPageContentProps {
  groups: ResearchGroup[];
}

export default function ResearchGroupsPageContent({ groups }: ResearchGroupsPageContentProps) {
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<string>(searchParams.get('selected') ?? '');
  const selectedGroup = findSelectedItem<ResearchGroup>(
    groups,
    decodeURI(selected ?? ''),
    groups[0]?.name,
  );

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <div className="px-7 sm:pl-[100px] sm:pr-[320px]">
        <SelectionList
          names={groups.map((group) => group.name)}
          selectedItemName={selectedGroup?.name ?? ''}
          path={researchGroupsPath}
          listGridColumnClass="lg:grid-cols-[repeat(auto-fit,minmax(_236px,_auto))]"
          setSelected={setSelected}
        />
      </div>
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
