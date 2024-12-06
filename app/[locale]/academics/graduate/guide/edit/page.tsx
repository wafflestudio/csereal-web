import { getAcademicsGuide } from '@/apis/v1/academics/[type]/guide';

import GuideEditPageContent from '../../../components/guide/GuideEditPageContent';

export default async function GraduateGuideEditPage() {
  const data = await getAcademicsGuide('graduate');

  return <GuideEditPageContent data={data} type="graduate" />;
}
