import { getResearchCenters } from '@/apis/research';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { ResearchCenter } from '@/types/research';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';
import { researchCenters } from '@/utils/segmentNode';

import ResearchCenterDetails from './ResearchCenterDetails';

const researchCentersPath = getPath(researchCenters);

export default async function ResearchCentersPage({
  searchParams,
}: {
  searchParams: { selected?: string };
}) {
  const centers = await getResearchCenters();
  const selectedCenter = findSelectedItem<ResearchCenter>(centers, searchParams.selected);

  return (
    <PageLayout titleType="big" bodyStyle={{ paddingTop: 0 }}>
      <SelectionList
        names={centers.map((center) => center.name)}
        selectedItemName={selectedCenter?.name ?? ''}
        path={researchCentersPath}
        listGridColumnClass="lg:grid-cols-[repeat(auto-fit,minmax(_200px,_auto))]"
      />
      {selectedCenter ? (
        <ResearchCenterDetails center={selectedCenter} />
      ) : (
        <Fallback selected={selectedCenter} />
      )}
    </PageLayout>
  );
}

const Fallback = ({ selected }: { selected: string }) => (
  <p>
    <b>{selected}</b> 연구그룹은 존재하지 않습니다.
  </p>
);
