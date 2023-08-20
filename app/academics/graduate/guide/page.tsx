import GuideContent from '@/public/image/undergraduate_guide_contents.svg';

import { getAcademicsGuide, getAcademicsGuideMock } from '@/apis/academics';

import GuidePage from '@/components/academics/GuidePage';

export default async function GraduateGuidePage() {
  // const data = await getAcademicsGuide('graduate');
  const data = await getAcademicsGuideMock('graduate');

  return <GuidePage description={data.description} Content={GuideContent} />;
}
