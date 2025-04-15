import { getAcademicsGuide } from '@/apis/v2/academics/[studentType]/guide';
import GuidePageContent from '@/app/[locale]/academics/components/guide/GuidePageContent';
import { graduateGuide } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

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
