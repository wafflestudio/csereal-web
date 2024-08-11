export const dynamic = 'force-dynamic';

import { Metadata } from 'next';

import { getFutureCareeres } from '@/apis/about';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getMetadata } from '@/utils/metadata';
import { futureCareers } from '@/utils/segmentNode';

import CareerCompanies from './CareerCompanies';
import CareerStat from './CareerStat';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: futureCareers });
}

export default async function GreetingsPage() {
  const { description, stat, companies } = await getFutureCareeres();

  return (
    <PageLayout titleType="big">
      <p className="mb-9 whitespace-pre-wrap break-keep text-md font-normal leading-[1.625rem]">
        {description}
      </p>
      <CareerStat stat={stat} />
      <CareerCompanies companies={companies} />
    </PageLayout>
  );
}
