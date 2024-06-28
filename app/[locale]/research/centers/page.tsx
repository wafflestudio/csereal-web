import { getResearchCenters } from '@/apis/research';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Locale } from '@/types/locale';
import { ResearchCenter } from '@/types/research';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { researchCenters } from '@/utils/segmentNode';

import ResearchCenterDetails from './ResearchCenterDetails';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
  return await getMetadata({ locale, node: researchCenters });
}

const researchCentersPath = getPath(researchCenters);

export default async function ResearchCentersPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: Locale };
  searchParams: { selected?: string };
}) {
  const centers = await getResearchCenters(locale);
  const selectedCenter = findSelectedItem<ResearchCenter>(
    centers,
    searchParams.selected,
    getPath(researchCenters),
  );

  return (
    <PageLayout titleType="big" bodyStyle={{ paddingTop: 0 }}>
      <SelectionList
        names={centers.map((center) => ({ ko: center.name }))}
        selectedItemNameKo={selectedCenter?.name ?? ''}
        rootPath={researchCentersPath}
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
    <b>{selected}</b> 연구센터는 존재하지 않습니다.
  </p>
);
