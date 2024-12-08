import './style.css';

import { getCurriculum } from '@/apis/v1/academics/undergraduate/curriculum';
import { curriculum } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

import CurriculumPageContent from './CurriculumPageContent';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: curriculum });
}

export default async function UndergradutecurriculumPage() {
  const curriculumList = await getCurriculum();
  return <CurriculumPageContent data={curriculumList} />;
}
