import { Metadata } from 'next';

import { getGraduateRegularAdmission } from '@/apis/v1/admissions/graduate/regular-admission';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getMetadata } from '@/utils/metadata';
import { graduateAdmission } from '@/constants/segmentNode';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: graduateAdmission });
}

export default async function GraduateRegularAdmission() {
  const data = await getGraduateRegularAdmission();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={data.description} />
    </PageLayout>
  );
}
