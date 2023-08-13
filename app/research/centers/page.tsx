'use client';

import useSWR from 'swr';

import { getResearchCentersMock } from '@/apis/research';

import SelectionList from '@/components/common/SelectionList';
import PageLayout from '@/components/layout/PageLayout';
import ResearchCenterDetails from '@/components/research/ResearchCenterDetails';

import { researchCenters } from '@/types/page';
import { ResearchCenter } from '@/types/research';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';

interface ResearchCentersPageProps {
  searchParams: { selected?: string };
}

const researchCentersPath = getPath(researchCenters);

export default function ResearchGroupsPage({ searchParams }: ResearchCentersPageProps) {
  const { data: centers = [] } = useSWR({ url: '/research/centers' }, getResearchCentersMock);
  const selectedCenter = findSelectedItem<ResearchCenter>(
    centers,
    decodeURI(searchParams.selected ?? ''),
  );

  return (
    <PageLayout currentPage={researchCenters} title={researchCenters.name} titleSize="text-2xl">
      <SelectionList
        names={centers.map((center) => center.name)}
        selectedItemName={selectedCenter?.name ?? ''}
        path={researchCentersPath}
        gridColumnClass="grid-cols-[12.5rem_13.75rem_12.5rem]"
      />
      {selectedCenter && <ResearchCenterDetails center={selectedCenter} />}
    </PageLayout>
  );
}
