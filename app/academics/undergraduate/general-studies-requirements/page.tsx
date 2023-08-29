// import { getGeneralStudiesRequirements } from '@/apis/academics';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergraduateGeneralStudiesRequirementsPage() {
  //   const data = await getGeneralStudiesRequirements();

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      {/* <HTMLViewer htmlContent={data.description} margin="mt-7" /> */}
    </PageLayout>
  );
}
