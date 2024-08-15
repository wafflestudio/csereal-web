import { Metadata } from 'next';

import { getUndergraduateRegularAdmission } from '@/apis/admission';
import HTMLViewer from '@/components/editor/HTMLViewer';
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
