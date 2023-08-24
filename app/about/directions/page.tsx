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
const FIND_PATH_URL =
  'https://map.naver.com/v5/directions/-/14132304.586627584,4502018.066849938,%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90%EA%B4%80%EC%95%85%EC%BA%A0%ED%8D%BC%EC%8A%A4%EC%A0%9C1%EA%B3%B5%ED%95%99%EA%B4%80,18721800,PLACE_POI/-/transit?c=15,0,0,0,dh';

export default function DirectionsPage({ searchParams }: DirectionsPageProps) {
  const { data: directionList = [] } = useSWR({ url: '/clubs' }, getDirectionsMock);
  const selectedDirection = findSelectedItem<Direction>(
    directionList,
    searchParams.selected ?? '',
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
        {selectedDirection ? (
          <DirectionsDetails direction={selectedDirection} />
        ) : (
          <p>
            <b>{`'${searchParams.selected}'`}</b>은/는{' '}
            <a href={FIND_PATH_URL} className="text-link hover:underline">
              길찾기
            </a>
            를 활용해주세요.
          </p>
        )}
      </div>
    </PageLayout>
  );
}
