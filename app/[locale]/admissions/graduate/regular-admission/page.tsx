import { Metadata } from 'next';

import { getGraduateRegularAdmission } from '@/apis/v1/admissions/graduate/regular-admission';
import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getMetadata } from '@/utils/metadata';
import { graduateAdmission } from '@/utils/segmentNode';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
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
