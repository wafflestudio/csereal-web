import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import AdmissionsPageContent from '@/app/[locale]/admissions/components/AdmissionsPageContent';
import { AdmissionPageProps } from '@/app/[locale]/admissions/type';
import { FETCH_TAG_INTERNATIONAL_UNDERGRADUATE } from '@/constants/network';
import { internationalUndergraduateAdmission } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
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

const path = getPath(internationalUndergraduateAdmission);

export default async function InternationalUndergraduateAdmissionPage({
  params,
}: AdmissionPageProps) {
  const locale = (await params).locale;
  const data = await getAdmissions(
    'international',
    'undergraduate',
    FETCH_TAG_INTERNATIONAL_UNDERGRADUATE,
  );

  return <AdmissionsPageContent pathname={path} description={data[locale].description} />;
}
