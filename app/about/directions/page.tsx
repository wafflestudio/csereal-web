'use client';

import useSWR from 'swr';

import { getDirectionsMock } from '@/apis/directions';

import SelectionList from '@/components/common/selection/SelectionList';
import DirectionsDetails from '@/components/directions/DirectionsDetails';
import LocationGuide from '@/components/directions/LocationGuide';
import LocationMap from '@/components/directions/LocationMap';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Direction } from '@/types/directions';
import { directions } from '@/types/page';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';

interface DirectionsPageProps {
  searchParams: { selected?: string };
}

const directionsPath = getPath(directions);

export default function DirectionsPage({ searchParams }: DirectionsPageProps) {
  const { data: directionList = [] } = useSWR({ url: '/clubs' }, getDirectionsMock);
  const selectedDirection = findSelectedItem<Direction>(
    directionList,
    decodeURI(searchParams.selected ?? ''),
    directionList[0]?.name,
  );

  return (
    <PageLayout titleType="big" titleMargin="mb-[3.25rem]">
      <div className="mb-12">
        <LocationGuide />
        <LocationMap />
      </div>
      <div>
        <SelectionList
          names={directionList.map((d) => d.name)}
          selectedItemName={selectedDirection?.name ?? ''}
          path={directionsPath}
          listGridColumnClass="grid-cols-[repeat(4,_12.5rem)]"
        />
        {selectedDirection && <DirectionsDetails direction={selectedDirection} />}
      </div>
    </PageLayout>
  );
}
