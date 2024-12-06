import { getAcademicsGuide } from '@/apis/v1/academics/[studentType]/guide';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { undergraduateGuide } from '@/utils/segmentNode';

import GuidePageContent from '../../components/guide/GuidePageContent';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: undergraduateGuide });
}

const undergraduateGuidePath = getPath(undergraduateGuide);

export default async function UndergraduateGuidePage() {
  const data = await getAcademicsGuide('undergraduate');
  return <GuidePageContent data={data} pathname={undergraduateGuidePath} />;
}
