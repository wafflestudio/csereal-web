import GuideContent from '@/public/image/undergraduate_guide_contents.svg';

import { getAcademicsGuide, getAcademicsGuideMock } from '@/apis/academics';

import GuidePage from '@/components/academics/GuidePage';

export default async function UndergraduateGuidePage() {
  //   const data = await getAcademicsGuide('undergraduate');
  const data = await getAcademicsGuideMock('undergraduate');

  return <GuidePage description={data.description} Content={GuideContent} />;
}
