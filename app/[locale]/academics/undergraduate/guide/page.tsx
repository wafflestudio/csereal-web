import { getAcademicsGuide } from '@/apis/v1/academics/[studentType]/guide';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { undergraduateGuide } from '@/constants/segmentNode';

import GuidePageContent from '../../components/guide/GuidePageContent';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: undergraduateGuide });
}

const undergraduateGuidePath = getPath(undergraduateGuide);

export default async function UndergraduateGuidePage() {
  const data = await getAcademicsGuide('undergraduate');
  return <GuidePageContent data={data} pathname={undergraduateGuidePath} />;
}
