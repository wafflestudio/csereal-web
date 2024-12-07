import { Metadata } from 'next';

import { getInternationalUndergraduate } from '@/apis/v1/admissions/international/undergraduate';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getMetadata } from '@/utils/metadata';
import { internationalUndergraduateAdmission } from '@/constants/segmentNode';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({
    locale,
    node: internationalUndergraduateAdmission,
    metadata: {
      description: `Dept. of Computer Science and Engineering, SNU ${-internationalUndergraduateAdmission.name} page`,
    },
  });
}

export default async function InternationalUndergraduateAdmissionPage() {
  const { description } = await getInternationalUndergraduate();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={description} />
    </PageLayout>
  );
}
