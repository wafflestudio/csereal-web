import { getDirections } from '@/apis/v2/about/directions';
import DirectionEditor from '@/app/[locale]/about/directions/edit/DirectionEditor';
import { findItemBySearchParam } from '@/utils/findSelectedItem';

interface DirectionsEditPageProps {
  searchParams: Promise<{ selected?: string }>;
}

export default async function DirectionsEditPage(props: DirectionsEditPageProps) {
  const searchParams = await props.searchParams;
  const directionList = await getDirections();
  const selectedDirection =
    findItemBySearchParam(
      directionList,
      (item) => [item.en.name, item.ko.name],
      searchParams.selected,
    ) || directionList[0];

  return <DirectionEditor data={selectedDirection} />;
}
