export const dynamic = 'force-dynamic';

import { Metadata } from 'next';

import { getFacilities } from '@/apis/about';

import FacilitesList from '@/app/[locale]/about/facilities/FacilitiesList';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getMetadata } from '@/utils/metadata';
import { facilities } from '@/utils/segmentNode';

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
