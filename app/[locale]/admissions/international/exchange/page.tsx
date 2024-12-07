import { Metadata } from 'next';

import { getInternationalExchangeVisiting } from '@/apis/v1/admissions/international/exchange-visiting';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getMetadata } from '@/utils/metadata';
import { exchangeVisitingProgram } from '@/utils/segmentNode';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({
    locale,
    node: exchangeVisitingProgram,
    metadata: {
      description: `Dept. of Computer Science and Engineering, SNU ${exchangeVisitingProgram.name} page`,
    },
  });
}

export default async function InternationalExchangePage() {
  const { description } = await getInternationalExchangeVisiting();

  return (
    <PageLayout titleType="big" bodyStyle={{ paddingBottom: 0 }}>
      <HTMLViewer htmlContent={description} className="pb-16 sm:pb-[220px]" />
    </PageLayout>
  );
}
