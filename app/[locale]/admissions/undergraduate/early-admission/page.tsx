import { getUndergraduateEarlyAdmission } from '@/apis/admission';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergraduateEarlyAdmission() {
  const data = await getUndergraduateEarlyAdmission();

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <HTMLViewer htmlContent={data?.description ?? ''} />
    </PageLayout>
  );
}
