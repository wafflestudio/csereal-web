export const dynamic = 'force-dynamic';

import { ReactNode } from 'react';

import { getDirections } from '@/apis/v2/about/directions';
import DirectionsDetails from '@/app/[locale]/about/directions/DirectionsDetails';
import LocationGuide from '@/app/[locale]/about/directions/LocationGuide';
import LocationMap from '@/app/[locale]/about/directions/LocationMap';
import SelectionList from '@/components/common/selection/SelectionList';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { directions } from '@/constants/segmentNode';
import { Language } from '@/types/language';
import { findItemBySearchParam } from '@/utils/findSelectedItem';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: directions });
}

interface DirectionsPageProps {
  params: Promise<{ locale: Language }>;
  searchParams: Promise<{ selected?: string }>;
}

const directionsPath = getPath(directions);
const FIND_PATH_URL =
  'https://map.naver.com/v5/directions/-/14132304.586627584,4502018.066849938,%EC%84%9C%EC%9A%B8%EB%8C%80%ED%95%99%EA%B5%90%EA%B4%80%EC%95%85%EC%BA%A0%ED%8D%BC%EC%8A%A4%EC%A0%9C1%EA%B3%B5%ED%95%99%EA%B4%80,18721800,PLACE_POI/-/transit?c=15,0,0,0,dh';

export default async function DirectionsPage(props: DirectionsPageProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const directionList = await getDirections();
  const selectedDirection = findItemBySearchParam(
    directionList,
    (item) => [item.ko.name, item.en.name],
    searchParams.selected,
  );

  return (
    <PageLayout titleType="big">
      <div className="mb-12">
        <LocationGuide />
        <LocationMap />
      </div>
      <SelectionList
        names={directionList.map((d) => ({ ko: d.ko.name, en: d.en.name }))}
        selectedItemNameKo={selectedDirection?.ko.name ?? ''}
        rootPath={directionsPath}
      />
      {selectedDirection ? (
        <DirectionsDetails direction={selectedDirection[params.locale]} />
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
