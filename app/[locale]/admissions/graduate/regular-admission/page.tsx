import { getGraduateRegularAdmission } from '@/apis/admission';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function GraduateRegularAdmission() {
  const data = await getGraduateRegularAdmission();

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <HTMLViewer htmlContent={data?.description ?? ''} />
    </PageLayout>
  );
}
