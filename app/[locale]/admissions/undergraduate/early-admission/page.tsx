import { Metadata } from 'next';

import { getUndergraduateEarlyAdmission } from '@/apis/v1/admissions/undergraduate/early-admission';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getMetadata } from '@/utils/metadata';
import { undergraduateEarlyAdmission } from '@/utils/segmentNode';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
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
