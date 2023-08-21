import GuideContent from '@/public/image/undergraduate_guide_contents.svg';

import { getAcademicsGuide } from '@/apis/academics';

import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergraduateGuidePage() {
  const data = await getAcademicsGuide('undergraduate');

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <GuideContent />
      <HTMLViewer htmlContent={data.description} margin="mt-7" />
    </PageLayout>
  );
}
