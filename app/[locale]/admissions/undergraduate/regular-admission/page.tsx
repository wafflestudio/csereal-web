import { Metadata } from 'next';

import { getUndergraduateRegularAdmission } from '@/apis/v1/admissions/undergraduate/regular-admission';
import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getMetadata } from '@/utils/metadata';
import { undergraduateRegularAdmission } from '@/utils/segmentNode';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: undergraduateRegularAdmission });
}

export default async function UndergraduateRegularAdmission() {
  const data = await getUndergraduateRegularAdmission();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={data.description} />
    </PageLayout>
  );
}
