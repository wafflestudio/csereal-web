import { getDirections, getDirectionsMock } from '@/apis/directions';

import HTMLViewer from '@/components/common/HTMLViewer';
import SelectionList from '@/components/common/SelectionList';
import LocationGuide from '@/components/directions/LocationGuide';
import LocationMap from '@/components/directions/LocationMap';
import PageLayout from '@/components/layout/PageLayout';

import { directions } from '@/types/page';

import { getPath } from '@/utils/page';

interface DirectionsPageProps {
  searchParams: { selected?: string };
}

const DEFAULT_DIRECITON = '대중교통';
const directionsPath = getPath(directions);

export default async function DirectionsPage({ searchParams }: DirectionsPageProps) {
  const selected = searchParams.selected ? decodeURI(searchParams.selected) : DEFAULT_DIRECITON;
  const { directionList, selectedDirection } = await getData(selected);

  return (
    <PageLayout titleType="big">
      <div className="mb-[3.25rem]">
        <LocationGuide />
        <LocationMap />
      </div>
      <div>
        <SelectionList
          names={directionList.map((d) => d.name)}
          selectedItemName={selectedDirection?.name ?? ''}
          path={directionsPath}
        />
        {selectedDirection && <HTMLViewer htmlContent={selectedDirection.description} />}
      </div>
    </PageLayout>
  );
}

async function getData(selectedDirectionName: string) {
  // const directions = await getDirections();
  const directionList = getDirectionsMock();
  const selectedDirection = directionList.find((dir) => dir.name === selectedDirectionName);
  return { directionList, selectedDirection };
}
