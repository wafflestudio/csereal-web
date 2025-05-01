import { getFacilities } from '@/apis/v2/about/facilities';
import FacilityEditor from '@/app/[locale]/about/facilities/edit/FacilityEditor';
import { findItemBySearchParam } from '@/utils/findSelectedItem';

interface FacilitiesEditPageProps {
  searchParams: Promise<{ id: string }>;
}

export default async function FacilitiesEditPage(props: FacilitiesEditPageProps) {
  const searchParams = await props.searchParams;
  const facilities = await getFacilities();
  const selectedFacility =
    findItemBySearchParam(
      facilities,
      (item) => [item.en.id.toString(), item.ko.id.toString()],
      searchParams.id,
    ) || facilities[0];

  return <FacilityEditor data={selectedFacility} />;
}
