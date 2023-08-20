import GuideContents from '@/public/image/undergraduate_guide_contents.svg';

import { getUndergraduateGuide, getUndergraduateGuideMock } from '@/apis/academics';

import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergraduateGuidePage() {
  // const data = await getUndergraduateGuide();
  const data = await getUndergraduateGuideMock();

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <GuideContents />
      <HTMLViewer htmlContent={data.description} margin="mt-7" />
    </PageLayout>
  );
}
