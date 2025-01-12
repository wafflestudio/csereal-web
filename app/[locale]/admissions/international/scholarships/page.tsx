import { Metadata } from 'next';

import { getInternationalScholarships } from '@/apis/v1/admissions/international/scholarships';
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

export default async function InternationalScholarshipPage() {
  const { description } = await getInternationalScholarships();

  return (
    <PageLayout titleType="big" removeBottomPadding>
      <HTMLViewer htmlContent={description} wrapperClassName="pb-16 sm:pb-[220px]" />
    </PageLayout>
  );
}
