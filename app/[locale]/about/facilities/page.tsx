import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getFacilities } from '@/apis/about';

import FacilitesList from '@/app/[locale]/about/facilities/FacilitiesList';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('시설 안내'),
    description: '서울대학교 컴퓨터공학부 시설 안내 페이지입니다.',
  };
}

export default async function FacilitiesPage() {
  const facilities = await getFacilities();

  return (
    <PageLayout titleType="big" bodyStyle={{ paddingTop: 0 }}>
      <FacilitesList facilities={facilities} />
    </PageLayout>
  );
}
