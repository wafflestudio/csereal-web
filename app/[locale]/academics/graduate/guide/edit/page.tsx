import { getAcademicsGuide } from '@/apis/academics';

import GuideEditPageContent from '../../../helper/guide/GuideEditPageContent';

export default async function GraduateGuideEditPage() {
  const data = await getAcademicsGuide('graduate');

  return <GuideEditPageContent data={data} type="graduate" />;
}
