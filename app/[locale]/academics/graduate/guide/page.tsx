import GuideContent from '@/public/image/graduate_guide_contents.svg'; // 추후 수정

import { getAcademicsGuide } from '@/apis/academics';

import Attachments from '@/components/common/Attachments';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function GraduateGuidePage() {
  const data = await getAcademicsGuide('graduate');

  return (
    <PageLayout titleType="big" titleMargin="mb-5">
      <Attachments files={data.attachments} />
      <GuideContent className="mt-9" />
      <HTMLViewer htmlContent={data.description} margin="mt-7" />
    </PageLayout>
  );
}
