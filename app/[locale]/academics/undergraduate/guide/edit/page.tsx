import { getAcademicsGuide } from '@/apis/academics';

import GuideEditPageContent from '../../../helper/GuideEditPageContent';

export default async function UndergraduateGuideEditPage() {
  const data = await getAcademicsGuide('undergraduate');

  return <GuideEditPageContent data={data} type="undergraduate" />;
}
