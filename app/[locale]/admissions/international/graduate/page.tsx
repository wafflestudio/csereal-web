import { Metadata } from 'next';

import { getInternationalgraduate } from '@/apis/v2/admissions/international/graduate';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { internationalGraduateAdmission } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

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
