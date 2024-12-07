import { getHistory } from '@/apis/v1/about/history';
import { history } from '@/utils/segmentNode';

import AboutEditor from '../../components/AboutEditor';

export default async function HistoryEditPage() {
  const [koData, enData] = await Promise.all([getHistory('ko'), getHistory('en')]);

  return <AboutEditor data={{ ko: koData, en: enData }} node={history} />;
}
