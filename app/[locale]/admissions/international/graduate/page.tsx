import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getInternationalgraduate } from '@/apis/admission';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('Graduate'),
    description: 'Dept. of Computer Science and Engineering, SNU Graduate page',
  };
}

export default async function InternationalGraduateAdmissionPage() {
  const { description } = await getInternationalgraduate();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={description} />
    </PageLayout>
  );
}
