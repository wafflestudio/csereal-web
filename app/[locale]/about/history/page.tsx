export const dynamic = 'force-dynamic';

import { getHistory } from '@/apis/v1/about/history';
import { EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import history_image from '@/public/image/about/history.png';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { history } from '@/utils/segmentNode';

interface HistoryPageProps {
  params: { locale: Language };
}

const historyPath = getPath(history);

export async function generateMetadata({ params: { locale } }: HistoryPageProps) {
  return await getMetadata({ locale, node: history });
}

export default async function History({ params: { locale } }: HistoryPageProps) {
  const resp = await getHistory(locale);

  return (
    <PageLayout titleType="big">
      <LoginVisible staff>
        <div className="mb-8 text-right">
          <EditButton href={`${historyPath}/edit`} />
        </div>
      </LoginVisible>
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
