import { Metadata } from 'next';

import { getInternationalScholarships } from '@/apis/v1/admissions/international/scholarships';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getMetadata } from '@/utils/metadata';
import { internationalScholarships } from '@/utils/segmentNode';

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
    <PageLayout titleType="big" bodyStyle={{ paddingBottom: 0 }}>
      <HTMLViewer htmlContent={description} className="pb-16 sm:pb-[220px]" />
    </PageLayout>
  );
}
