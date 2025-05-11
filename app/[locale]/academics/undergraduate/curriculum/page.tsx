import '@/app/[locale]/academics/undergraduate/curriculum/style.css';

import { getAcademicsByPostType } from '@/apis/v2/academics/[studentType]/[postType]';
import CurriculumPageContent from '@/app/[locale]/academics/undergraduate/curriculum/CurriculumPageContent';
import { FETCH_TAG_CURRICULUM } from '@/constants/network';
import { curriculum } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: curriculum });
}

export default async function UndergradutecurriculumPage() {
  const curriculumList = await getAcademicsByPostType(
    'undergraduate',
    'curriculum',
    FETCH_TAG_CURRICULUM,
  );
  return <CurriculumPageContent data={curriculumList} />;
}
