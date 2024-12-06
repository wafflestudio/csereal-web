import { getAcademicsGuide } from '@/apis/v1/academics/[studentType]/guide';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { graduateGuide } from '@/utils/segmentNode';

import GuidePageContent from '../../components/guide/GuidePageContent';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: graduateGuide });
}

const graduateGuidePath = getPath(graduateGuide);

export default async function GraduateGuidePage() {
  const data = await getAcademicsGuide('graduate');

  return <GuidePageContent data={data} pathname={graduateGuidePath} />;
}
