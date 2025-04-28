import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import { AdmissionPageProps } from '@/app/[locale]/admissions/type';
import { FETCH_TAG_EARLY_ADMISSION } from '@/constants/network';
import { undergraduateEarlyAdmission } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

import AdmissionsPageContent from '../../components/AdmissionsPageContent';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: undergraduateEarlyAdmission });
}

const path = getPath(undergraduateEarlyAdmission);

export default async function UndergraduateEarlyAdmission({ params }: AdmissionPageProps) {
  const locale = (await params).locale;
  const data = await getAdmissions('undergraduate', 'early-admission', FETCH_TAG_EARLY_ADMISSION);

  return <AdmissionsPageContent pathname={path} description={data[locale].description} />;
}
