import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';

import { getDirections } from '@/apis/about';

import DirectionsDetails from '@/app/[locale]/about/directions/DirectionsDetails';
import LocationGuide from '@/app/[locale]/about/directions/LocationGuide';
import LocationMap from '@/app/[locale]/about/directions/LocationMap';

import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { findSelectedItem } from '@/utils/findSelectedItem';
import { getPath } from '@/utils/page';
import { directions } from '@/utils/segmentNode';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('찾아오는 길'),
    description: '서울대학교 컴퓨터공학부 찾아오는 길 페이지입니다.',
  };
}

interface DirectionsPageProps {
  searchParams: { selected?: string };
}

const directionsPath = getPath(directions);
const FIND_PATH_URL =
  'https://map.naver.com/v5/directions/-/14132304.586627584,4502018.066849938,%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90%EA%B4%80%EC%95%85%EC%BA%A0%ED%8D%BC%EC%8A%A4%EC%A0%9C1%EA%B3%B5%ED%95%99%EA%B4%80,18721800,PLACE_POI/-/transit?c=15,0,0,0,dh';

export default async function DirectionsPage({ searchParams }: DirectionsPageProps) {
  const directionList = await getDirections();
  const selectedDirection = findSelectedItem(directionList, searchParams.selected);

  return (
    <PageLayout titleType="big">
      <div className="mb-12">
        <LocationGuide />
        <LocationMap />
      </div>
      <SelectionList
        names={directionList.map((d) => d.name)}
        selectedItemName={selectedDirection?.name ?? ''}
        path={directionsPath}
      />
      {selectedDirection ? (
        <DirectionsDetails direction={selectedDirection} />
      ) : (
        <NotFoundLabel>{searchParams.selected}</NotFoundLabel>
      )}
    </PageLayout>
  );
}

const NotFoundLabel = ({ children }: { children: ReactNode }) => (
  <p>
    <b>{children}</b>은/는{' '}
    <a href={FIND_PATH_URL} className="text-link hover:underline">
      길찾기
    </a>
    를 활용해주세요.
  </p>
);
