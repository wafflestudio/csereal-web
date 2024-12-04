import { getFacilities } from '@/apis/v2/about/facilities';
import { findItemBySearchParam } from '@/utils/findSelectedItem';
import FacilityEditor from './FacilityEditor';

interface FacilitiesEditPageProps {
  searchParams: { id: string };
}

export default async function FacilitiesEditPage({ searchParams }: FacilitiesEditPageProps) {
  const facilities = await getFacilities();
  const selectedFacility =
    findItemBySearchParam(
      facilities,
      (item) => [item.en.id.toString(), item.ko.id.toString()],
      searchParams.id,
    ) || facilities[0];

  return <FacilityEditor data={selectedFacility} />;
}
