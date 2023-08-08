import Link from 'next/link';

import { getDirections, getDirectionsMock } from '@/apis/directions';

import HTMLViewer from '@/components/common/HTMLViewer';
import DirectionsList from '@/components/directions/DirectionList';
import PageLayout from '@/components/layout/PageLayout';

import { directions, staff } from '@/types/page';

import { getPath } from '@/utils/page';

interface DirectionsPageProps {
  searchParams: { selected?: string };
}

const DEFAULT_DIRECITON = 'public-transit';
const staffPath = getPath(staff);

export default async function DirectionsPage({ searchParams }: DirectionsPageProps) {
  const selected = searchParams.selected ? decodeURI(searchParams.selected) : DEFAULT_DIRECITON;
  const { directionList, selectedDirection } = await getData(selected);

  return (
    <PageLayout currentPage={directions} title={directions.name} titleSize="text-2xl">
      <p className="mb-[3.25rem] font-noto text-sm leading-6">
        컴퓨터공학부는 서울대학교 관악 301동(신공학관1)에 있습니다.
        <br />
        주소: 08826 서울특별시 관악구 관악로 1 서울대학교 공과대학 컴퓨터공학부 행정실(301동 316호)
        <br />
        전화:{' '}
        <Link href={staffPath} className="underline text-link">
          학부 연락처
        </Link>
      </p>
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
