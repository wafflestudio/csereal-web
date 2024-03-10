import { getAcademicsGuide } from '@/apis/academics';

import Attachments from '@/components/common/Attachments';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function GraduateGuidePage() {
  const data = await getAcademicsGuide('graduate');

  return (
    <PageLayout titleType="big">
      <Attachments files={data.attachments} />
      <HTMLViewer htmlContent={data.description} />
    </PageLayout>
  );
}
