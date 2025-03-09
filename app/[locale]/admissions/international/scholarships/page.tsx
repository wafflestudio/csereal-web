import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import { AdmissionPageProps } from '@/app/[locale]/admissions/type';
import { FETCH_TAG_INTERNATIONAL_SCHOLARSHIPS } from '@/constants/network';
import { internationalScholarships } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

import AdmissionsPageContent from '../../components/AdmissionsPageContent';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({
    locale,
    node: internationalScholarships,
    metadata: {
      description: `Dept. of Computer Science and Engineering, SNU ${internationalScholarships.name} page`,
    },
  });
}

const path = getPath(internationalScholarships);

export default async function InternationalScholarshipsPage({ params }: AdmissionPageProps) {
  const locale = (await params).locale;
  const data = await getAdmissions(
    'international',
    'scholarships',
    FETCH_TAG_INTERNATIONAL_SCHOLARSHIPS,
  );

  return (
    <AdmissionsPageContent
      pathname={path}
      description={data[locale].description}
      removeBottomPadding
      htmlWrapperClassName="pb-16 sm:pb-[220px]"
    />
  );
}
