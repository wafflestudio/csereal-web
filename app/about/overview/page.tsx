import { getOverview } from '@/apis/about';

import Attachment from '@/components/common/Attachment';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function OverviewPage() {
  const response = await getOverview();

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <HTMLViewer
        htmlContent={response.description}
        topRightContent={{ type: 'image', width: 320, height: 213, url: response.imageURL }}
      />
      <Attachment files={[response.attachment]} />
    </PageLayout>
  );
}
