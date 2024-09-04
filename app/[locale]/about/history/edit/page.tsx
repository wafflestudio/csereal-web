import { getHistory } from '@/apis/about';
import { getPath } from '@/utils/page';
import { history } from '@/utils/segmentNode';

import AboutEditPageContent from '../../AboutEditPageContent';

export default async function HistoryEditPage() {
  const [koData, enData] = await Promise.all([getHistory('ko'), getHistory('en')]);

  return (
    <AboutEditPageContent
      data={{ ko: koData, en: enData }}
      fallbackPath={getPath(history)}
      segNode={history}
      type="history"
    />
  );
}
