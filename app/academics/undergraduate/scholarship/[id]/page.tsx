import { getScholarship } from '@/apis/academics';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergraduateGuidePage() {
  const { name, description } = await getScholarship();

  return (
    <PageLayout
      title={name.length > 20 ? name.replace(/\([^)]*\)/g, '') : name}
      titleType="big"
      titleMargin="mb-8"
    >
      <HTMLViewer htmlContent={description} />
    </PageLayout>
  );
}
