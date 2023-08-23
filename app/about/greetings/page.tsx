import { getGreetings } from '@/apis/about';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function GreetingsPage() {
  const response = await getGreetings();

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <HTMLViewer
        htmlContent={response.description}
        topRightContent={{ type: 'image', width: 212, height: 280, url: response.imageURL }}
      />
    </PageLayout>
  );
}
