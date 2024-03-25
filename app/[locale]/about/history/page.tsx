import history_image from '@/public/image/about/history.png';

import { getHistory } from '@/apis/about';

import ContentWithImage from '@/components/common/ContentWithImage';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function History() {
  const resp = await getHistory();

  return (
    <PageLayout titleType="big">
      <ContentWithImage
        content={resp.description}
        imageURL={history_image.src}
        imageWidth={320}
        imageHeight={360}
        imageMarginBottom={0}
      />
    </PageLayout>
  );
}
