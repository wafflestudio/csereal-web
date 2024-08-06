import { Metadata } from 'next';

import { getAcademicsGuide } from '@/apis/academics';

import { getMetadata } from '@/utils/metadata';
import { graduateGuide } from '@/utils/segmentNode';

import GuidePageContent from '../../helper/GuidePageContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: graduateGuide });
}

export default async function GraduateGuidePage() {
  const data = await getAcademicsGuide('graduate');

  return <GuidePageContent data={data} type="graduate" />;
}
