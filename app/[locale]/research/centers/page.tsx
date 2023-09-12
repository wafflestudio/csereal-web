export const dynamic = 'force-static';

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

export default async function ResearchCentersPage({ searchParams }: ResearchCentersPageProps) {
  const centers = await getResearchCenters();
  const selectedCenter = findSelectedItem<ResearchCenter>(
    centers,
    decodeURI(searchParams.selected ?? ''),
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
      {selectedCenter ? (
        <ResearchCenterDetails center={selectedCenter} />
      ) : (
        <p>
          <b>{`'${searchParams.selected}'`}</b> 연구센터는 존재하지 않습니다.
        </p>
      )}
    </PageLayout>
  );
}
