import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import AdmissionsPageContent from '@/app/[locale]/admissions/components/AdmissionsPageContent';
import { AdmissionPageProps } from '@/app/[locale]/admissions/type';
import { FETCH_TAG_INTERNATIONAL_GRADUATE } from '@/constants/network';
import { internationalGraduateAdmission } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
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

const path = getPath(internationalGraduateAdmission);

export default async function InternationalGraduateAdmissionPage({ params }: AdmissionPageProps) {
  const locale = (await params).locale;
  const data = await getAdmissions('international', 'graduate', FETCH_TAG_INTERNATIONAL_GRADUATE);

  return <AdmissionsPageContent pathname={path} description={data[locale].description} />;
}
