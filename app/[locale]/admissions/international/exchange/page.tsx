import { Metadata } from 'next';

import { getInternationalExchangeVisiting } from '@/apis/v2/admissions/international/exchange-visiting';
import { AdmissionPageProps } from '@/app/[locale]/admissions/type';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { exchangeVisitingProgram } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({
    locale,
    node: exchangeVisitingProgram,
    metadata: {
      description: `Dept. of Computer Science and Engineering, SNU ${exchangeVisitingProgram.name} page`,
    },
  });
}

export default async function InternationalExchangePage({ params }: AdmissionPageProps) {
  const locale = (await params).locale;
  const data = await getInternationalExchangeVisiting();

  return (
    <PageLayout titleType="big" removeBottomPadding>
      <HTMLViewer htmlContent={data[locale].description} wrapperClassName="pb-16 sm:pb-[220px]" />
    </PageLayout>
  );
}
