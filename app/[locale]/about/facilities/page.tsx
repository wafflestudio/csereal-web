import { getFacilities } from '@/apis/about';

import FacilitesList from '@/app/[locale]/about/facilities/FacilitiesList';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function FacilitiesPage() {
  const facilities = await getFacilities();

  return (
    <PageLayout titleType="big" titleMargin="mb-[1.125rem]">
      <FacilitesList facilities={facilities} />
    </PageLayout>
  );
}
