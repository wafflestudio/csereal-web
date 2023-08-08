import { getDirections, getDirectionsMock } from '@/apis/directions';

import HTMLViewer from '@/components/common/HTMLViewer';
import DirectionsList from '@/components/directions/DirectionList';
import LocationGuide from '@/components/directions/LocationGuide';
import LocationMap from '@/components/directions/LocationMap';
import PageLayout from '@/components/layout/PageLayout';

import { directions } from '@/types/page';

interface DirectionsPageProps {
  searchParams: { selected?: string };
}

const DEFAULT_DIRECITON = 'public-transit';

export default async function DirectionsPage({ searchParams }: DirectionsPageProps) {
  const selected = searchParams.selected ? decodeURI(searchParams.selected) : DEFAULT_DIRECITON;
  const { directionList, selectedDirection } = await getData(selected);

  return (
    <PageLayout currentPage={directions} title={directions.name} titleSize="text-2xl">
      <div className="mb-[3.25rem]">
        <LocationGuide />
        <LocationMap />
      </div>
      <div>
        <DirectionsList directionsList={directionList} selectedDirections={selectedDirection} />
        {selectedDirection && <HTMLViewer htmlContent={selectedDirection.description} />}
      </div>
    </PageLayout>
  );
}

export async function getData(selectedDirectionEngName: string) {
  // const directions = await getDirections();
  const directionList = getDirectionsMock();
  const selectedDirection = directionList.find((dir) => dir.engName === selectedDirectionEngName);
  return { directionList, selectedDirection };
}
