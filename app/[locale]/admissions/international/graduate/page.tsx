import { Metadata } from 'next';

import { getInternationalgraduate } from '@/apis/admission';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getMetadata } from '@/utils/metadata';
import { internationalGraduateAdmission } from '@/utils/segmentNode';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({
    locale,
    node: internationalGraduateAdmission,
    metadata: {
      description: `Dept. of Computer Science and Engineering, SNU ${internationalGraduateAdmission.name} page`,
    },
  });
}

export default async function InternationalGraduateAdmissionPage() {
  const { description } = await getInternationalgraduate();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={description} />
    </PageLayout>
  );
}
