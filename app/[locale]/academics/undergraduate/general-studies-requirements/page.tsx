import { getAcademicsByPostType } from '@/apis/v2/academics/[studentType]/[postType]';
import GeneralStudiesPageContent from '@/app/[locale]/academics/undergraduate/general-studies-requirements/GeneralStudiesPageContent';
import { FETCH_TAG_GENERAL_STUDIES } from '@/constants/network';
import { generalStudies } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: generalStudies });
}

export default async function GeneralStudiesRequirementsPage() {
  const data = await getAcademicsByPostType(
    'undergraduate',
    'general-studies-requirements',
    FETCH_TAG_GENERAL_STUDIES,
  );

  return <GeneralStudiesPageContent data={data} />;
}
