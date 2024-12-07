import { getGeneralStudies } from '@/apis/v1/academics/undergraduate/general-studies-requirements';
import { getMetadata } from '@/utils/metadata';
import { generalStudies } from '@/utils/segmentNode';

import GeneralStudiesPageContent from './GeneralStudiesPageContent';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: generalStudies });
}

export default async function GeneralStudiesRequirementsPage() {
  const { generalStudies } = await getGeneralStudies();

  return <GeneralStudiesPageContent data={generalStudies} />;
}
