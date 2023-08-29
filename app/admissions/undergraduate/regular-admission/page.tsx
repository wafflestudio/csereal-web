import { getUndergraduateRegularAdmission } from '@/apis/admission';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergraduateRegularAdmission() {
  const data = await getUndergraduateRegularAdmission();

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <HTMLViewer htmlContent={data?.description ?? ''} />
    </PageLayout>
  );
}
