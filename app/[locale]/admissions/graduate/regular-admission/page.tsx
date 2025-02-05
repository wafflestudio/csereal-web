import { Metadata } from 'next';

import { getGraduateRegularAdmission } from '@/apis/v2/admissions/graduate/regular-admission';
import { AdmissionPageProps } from '@/app/[locale]/admissions/type';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { graduateAdmission } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: AdmissionPageProps): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: graduateAdmission });
}

export default async function GraduateRegularAdmission({ params }: AdmissionPageProps) {
  const locale = (await params).locale;
  const data = await getGraduateRegularAdmission();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={data[locale].description} />
    </PageLayout>
  );
}
