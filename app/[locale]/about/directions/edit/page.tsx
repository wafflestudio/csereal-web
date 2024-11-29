import { getDirections } from '@/apis/v2/about/directions';
import { findItemBySearchParam } from '@/utils/findSelectedItem';

import DirectionsEditPageContent from './DirectionsEditPageContent';

interface DirectionsEditPageProps {
  searchParams: { selected?: string };
}

export default async function DirectionsEditPage({ searchParams }: DirectionsEditPageProps) {
  const directionList = await getDirections();
  const selectedDirection =
    findItemBySearchParam(
      directionList,
      (item) => [item.en.name, item.ko.name],
      searchParams.selected,
    ) || directionList[0];

  return <DirectionsEditPageContent data={selectedDirection} />;
}
