import GuideContent from '@/public/image/undergraduate_guide_contents.svg'; // 추후 수정

import { getAcademicsGuide, getAcademicsGuideMock } from '@/apis/academics';

import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function GraduateGuidePage() {
  // const data = await getAcademicsGuide('graduate');
  const data = await getAcademicsGuideMock('graduate');

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <GuideContent />
      <HTMLViewer htmlContent={data.description} margin="mt-7" />
    </PageLayout>
  );
}
