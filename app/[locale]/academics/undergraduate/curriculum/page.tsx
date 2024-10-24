import './style.css';

import { getCurriculum } from '@/apis/academics';
import { getMetadata } from '@/utils/metadata';
import { curriculum } from '@/utils/segmentNode';

import CurriculumPageContent from './CurriculumPageContent';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: curriculum });
}

export default async function UndergradutecurriculumPage() {
  const curriculumList = await getCurriculum();

  return <CurriculumPageContent data={curriculumList} />;
}
