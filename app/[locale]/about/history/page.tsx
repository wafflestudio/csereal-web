import history_image from '@/public/image/about/history.png';

import { getHistory } from '@/apis/about';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function History() {
  const resp = await getHistory();

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <HTMLViewer
        htmlContent={resp.description}
        topRightContent={{ type: 'image', width: 320, height: 360, url: history_image.src }}
      />
    </PageLayout>
  );
}
