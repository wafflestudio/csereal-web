'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { ResearchCenter } from '@/types/research';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';
import { researchCenters } from '@/utils/segmentNode';

import ResearchCenterDetails from './ResearchCenterDetails';

const researchCentersPath = getPath(researchCenters);

export default function ResearchCentersPageContent({ centers }: { centers: ResearchCenter[] }) {
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<string>(searchParams.get('selected') ?? '');
  const selectedCenter = findSelectedItem<ResearchCenter>(
    centers,
    decodeURI(selected ?? ''),
    centers[0]?.name,
  );

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <SelectionList
        names={centers.map((center) => center.name)}
        selectedItemName={selectedCenter?.name ?? ''}
        path={researchCentersPath}
        listGridColumnClass="grid-cols-[12.5rem_13.75rem_12.5rem]"
        setSelected={setSelected}
      />
      {selectedCenter ? (
        <ResearchCenterDetails center={selectedCenter} />
      ) : (
        <p>
          <b>{`'${selected}'`}</b> 연구센터는 존재하지 않습니다.
        </p>
      )}
    </PageLayout>
  );
}
