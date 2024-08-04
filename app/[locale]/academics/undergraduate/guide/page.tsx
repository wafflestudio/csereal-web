import { getAcademicsGuide } from '@/apis/academics';

import { getMetadata } from '@/utils/metadata';
import { undergraduateGuide } from '@/utils/segmentNode';

import GuidePageContent from './GuidePageContent';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: undergraduateGuide });
}

export default async function UndergraduateGuidePage() {
  const data = await getAcademicsGuide('undergraduate');

  return <GuidePageContent data={data} type="undergraduate" />;
}
