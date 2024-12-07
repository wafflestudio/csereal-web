import { Metadata } from 'next';

import { getUndergraduateEarlyAdmission } from '@/apis/v1/admissions/undergraduate/early-admission';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { undergraduateEarlyAdmission } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: undergraduateEarlyAdmission });
}

export default async function UndergraduateEarlyAdmission() {
  const data = await getUndergraduateEarlyAdmission();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={data.description} />
    </PageLayout>
  );
}
