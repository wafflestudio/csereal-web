export const dynamic = 'force-dynamic';

import { Metadata } from 'next';

import { getHistory } from '@/apis/about';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import history_image from '@/public/image/about/history.png';
import { getMetadata } from '@/utils/metadata';
import { history } from '@/utils/segmentNode';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: history });
}

export default async function History() {
  const resp = await getHistory();

  return (
    <PageLayout titleType="big">
      <HTMLViewer
        htmlContent={resp.description}
        topRightContent={{
          type: 'image',
          widthPX: 320,
          heightPX: 360,
          url: history_image.src,
          mobileFullWidth: true,
        }}
      />
    </PageLayout>
  );
}
