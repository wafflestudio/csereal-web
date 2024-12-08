import { getAcademicsGuide } from '@/apis/v1/academics/[studentType]/guide';
import { graduateGuide } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

import GuidePageContent from '../../components/guide/GuidePageContent';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: graduateGuide });
}

const graduateGuidePath = getPath(graduateGuide);

export default async function GraduateGuidePage() {
  const data = await getAcademicsGuide('graduate');

  return <GuidePageContent data={data} pathname={graduateGuidePath} />;
}
