import { Metadata } from 'next';

import { getInternationalUndergraduate } from '@/apis/v2/admissions/international/undergraduate';
import { AdmissionPageProps } from '@/app/[locale]/admissions/type';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { internationalUndergraduateAdmission } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

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

export default async function InternationalUndergraduateAdmissionPage({
  params,
}: AdmissionPageProps) {
  const locale = (await params).locale;
  const data = await getInternationalUndergraduate();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={data[locale].description} />
    </PageLayout>
  );
}
