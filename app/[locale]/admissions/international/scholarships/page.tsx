import { Metadata } from 'next';

import { getInternationalScholarships } from '@/apis/v2/admissions/international/scholarships';
import { AdmissionPageProps } from '@/app/[locale]/admissions/type';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { internationalScholarships } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({
    locale,
    node: internationalScholarships,
    metadata: {
      description: `Dept. of Computer Science and Engineering, SNU ${internationalScholarships.name} page`,
    },
  });
}

export default async function InternationalScholarshipPage({ params }: AdmissionPageProps) {
  const locale = (await params).locale;
  const data = await getInternationalScholarships();

  return (
    <PageLayout titleType="big" removeBottomPadding>
      <HTMLViewer htmlContent={data[locale].description} wrapperClassName="pb-16 sm:pb-[220px]" />
    </PageLayout>
  );
}
