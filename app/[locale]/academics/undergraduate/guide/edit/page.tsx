import { getAcademicsGuide } from '@/apis/v1/academics/[type]/guide';

import GuideEditPageContent from '../../../components/guide/GuideEditPageContent';

export default async function UndergraduateGuideEditPage() {
  const data = await getAcademicsGuide('undergraduate');

  return <GuideEditPageContent data={data} type="undergraduate" />;
}
