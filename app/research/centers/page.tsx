'use client';

import useSWR from 'swr';

import { getResearchCenters } from '@/apis/research';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import ResearchCenterDetails from '@/components/research/centers/ResearchCenterDetails';

import { researchCenters } from '@/types/page';
import { ResearchCenter } from '@/types/research';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';

interface ResearchCentersPageProps {
  searchParams: { selected?: string };
}

const researchCentersPath = getPath(researchCenters);

export default function ResearchGroupsPage({ searchParams }: ResearchCentersPageProps) {
  const { data: centers = [] } = useSWR({ url: '/research/centers' }, getResearchCenters);
  const selectedCenter = findSelectedItem<ResearchCenter>(
    centers,
    searchParams.selected ?? '',
    centers[0]?.name,
  );

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <SelectionList
        names={centers.map((center) => center.name)}
        selectedItemName={selectedCenter?.name ?? ''}
        path={researchCentersPath}
        listGridColumnClass="grid-cols-[12.5rem_13.75rem_12.5rem]"
      />
      {selectedCenter && <ResearchCenterDetails center={selectedCenter} />}
    </PageLayout>
  );
}
