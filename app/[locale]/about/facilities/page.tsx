import { Metadata } from 'next';

import { getFacilities } from '@/apis/about';

import FacilitesList from '@/app/[locale]/about/facilities/FacilitiesList';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { facilities } from '@/constants/navTreeNode';

import { getMetadata } from '@/utils/metadata';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: facilities });
}

export default async function FacilitiesPage() {
  const facilities = await getFacilities();

  return (
    <PageLayout titleType="big" bodyStyle={{ paddingTop: 0 }}>
      <FacilitesList facilities={facilities} />
    </PageLayout>
  );
}
