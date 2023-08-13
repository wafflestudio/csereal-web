'use client';

import useSWR from 'swr';

import { getDirectionsMock } from '@/apis/directions';

import HTMLViewer from '@/components/common/HTMLViewer';
import SelectionList from '@/components/common/SelectionList';
import LocationGuide from '@/components/directions/LocationGuide';
import LocationMap from '@/components/directions/LocationMap';
import PageLayout from '@/components/layout/PageLayout';

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
  );

  return (
    <PageLayout currentPage={directions} title={directions.name} titleSize="text-2xl">
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
