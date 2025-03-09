import { Metadata } from 'next';

import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import { AdmissionPageProps } from '@/app/[locale]/admissions/type';
import { FETCH_TAG_GRADUATE_ADMISSION } from '@/constants/network';
import { graduateRegularAdmission } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

import AdmissionsPageContent from '../../components/AdmissionsPageContent';

export async function generateMetadata(props: AdmissionPageProps): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: graduateRegularAdmission });
}

const path = getPath(graduateRegularAdmission);

export default async function GraduateRegularAdmission({ params }: AdmissionPageProps) {
  const locale = (await params).locale;
  const data = await getAdmissions('graduate', 'regular-admission', FETCH_TAG_GRADUATE_ADMISSION);

  return <AdmissionsPageContent pathname={path} description={data[locale].description} />;
}
