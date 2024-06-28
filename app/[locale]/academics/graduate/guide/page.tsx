import { Metadata } from 'next';

import { getAcademicsGuide } from '@/apis/academics';

import Attachments from '@/components/common/Attachments';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getMetadata } from '@/utils/metadata';
import { graduateGuide } from '@/utils/segmentNode';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: graduateGuide });
}

export default async function GraduateGuidePage() {
  const data = await getAcademicsGuide('graduate');

  return (
    <PageLayout titleType="big">
      <Attachments files={data.attachments} />
      <HTMLViewer htmlContent={data.description} />
    </PageLayout>
  );
}
