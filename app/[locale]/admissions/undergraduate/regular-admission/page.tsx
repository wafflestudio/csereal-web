import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import { AdmissionPageProps } from '@/app/[locale]/admissions/type';
import { FETCH_TAG_REGULAR_ADMISSION } from '@/constants/network';
import { undergraduateRegularAdmission } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

import AdmissionsPageContent from '../../components/AdmissionsPageContent';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: undergraduateRegularAdmission });
}

const path = getPath(undergraduateRegularAdmission);

export default async function UndergraduateRegularAdmission({ params }: AdmissionPageProps) {
  const locale = (await params).locale;
  const data = await getAdmissions(
    'undergraduate',
    'regular-admission',
    FETCH_TAG_REGULAR_ADMISSION,
  );

  return <AdmissionsPageContent pathname={path} description={data[locale].description} />;
}
