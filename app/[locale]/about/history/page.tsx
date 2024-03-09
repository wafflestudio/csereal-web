import history_image from '@/public/image/about/history.png';

import { getHistory } from '@/apis/about';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function History() {
  const resp = await getHistory();

  return (
    <PageLayout titleType="big">
      <HTMLViewer
        htmlContent={resp.description}
        topRightContent={{ type: 'image', widthPX: 320, heightPX: 360, url: history_image.src }}
      />
    </PageLayout>
  );
}
