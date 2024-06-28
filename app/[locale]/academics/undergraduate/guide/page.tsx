import { getAcademicsGuide } from '@/apis/academics';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { undergraduateGuide } from '@/constants/navTreeNode';

import { getMetadata } from '@/utils/metadata';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: undergraduateGuide });
}

export default async function UndergraduateGuidePage() {
  const data = await getAcademicsGuide('undergraduate');

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={data.description} />
    </PageLayout>
  );
}
