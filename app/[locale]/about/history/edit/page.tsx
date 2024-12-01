import { getHistory } from '@/apis/v1/about/history';
import { history } from '@/utils/segmentNode';

import AboutEditPageContent from '../../components/AboutEditPageContent';

export default async function HistoryEditPage() {
  const [koData, enData] = await Promise.all([getHistory('ko'), getHistory('en')]);

  return <AboutEditPageContent data={{ ko: koData, en: enData }} node={history} />;
}
