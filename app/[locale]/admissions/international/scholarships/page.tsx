import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getInternationalScholarships } from '@/apis/admission';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('Scholarships'),
    description: 'Dept. of Computer Science and Engineering, SNU Scholarships page',
  };
}

export default async function InternationalScholarshipPage() {
  const { description } = await getInternationalScholarships();

  return (
    <PageLayout titleType="big" bodyStyle={{ paddingBottom: 0 }}>
      <HTMLViewer htmlContent={description} className="pb-16 sm:pb-[220px]" />
    </PageLayout>
  );
}
