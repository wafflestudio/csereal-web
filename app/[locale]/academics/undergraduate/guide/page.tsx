import { getAcademicsGuide } from '@/apis/v2/academics/[studentType]/guide';
import GuidePageContent from '@/app/[locale]/academics/components/guide/GuidePageContent';
import { undergraduateGuide } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

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
