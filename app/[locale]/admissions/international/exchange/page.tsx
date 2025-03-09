import { getAdmissions } from '@/apis/v2/admissions/[mainType]/[postType]';
import { AdmissionPageProps } from '@/app/[locale]/admissions/type';
import { FETCH_TAG_EXCHANGE } from '@/constants/network';
import { exchangeVisitingProgram } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

import AdmissionsPageContent from '../../components/AdmissionsPageContent';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({
    locale,
    node: exchangeVisitingProgram,
    metadata: {
      description: `Dept. of Computer Science and Engineering, SNU ${exchangeVisitingProgram.name} page`,
    },
  });
}

const path = getPath(exchangeVisitingProgram);

export default async function InternationalExchangePage({ params }: AdmissionPageProps) {
  const locale = (await params).locale;
  const data = await getAdmissions('international', 'exchange-visiting', FETCH_TAG_EXCHANGE);

  return (
    <AdmissionsPageContent
      pathname={path}
      description={data[locale].description}
      removeBottomPadding
      htmlWrapperClassName="pb-16 sm:pb-[220px]"
    />
  );
}
