import { Metadata } from 'next';

import { getUndergraduateRegularAdmission } from '@/apis/v2/admissions/undergraduate/regular-admission';
import { AdmissionPageProps } from '@/app/[locale]/admissions/type';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { undergraduateRegularAdmission } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: undergraduateRegularAdmission });
}

export default async function UndergraduateRegularAdmission({ params }: AdmissionPageProps) {
  const locale = (await params).locale;
  const data = await getUndergraduateRegularAdmission();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={data[locale].description} />
    </PageLayout>
  );
}
