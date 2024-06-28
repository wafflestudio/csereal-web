import { Metadata } from 'next';

import { getInternationalScholarships } from '@/apis/admission';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { internationalScholarships } from '@/constants/navTreeNode';

import { getMetadata } from '@/utils/metadata';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
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
