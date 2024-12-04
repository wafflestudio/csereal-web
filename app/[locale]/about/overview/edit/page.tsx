import { getOverview } from '@/apis/v1/about/overview';
import { overview } from '@/utils/segmentNode';

import AboutEditor from '../../components/AboutEditor';

export default async function OverviewEditPage() {
  const [koData, enData] = await Promise.all([getOverview('ko'), getOverview('en')]);

  return <AboutEditor data={{ ko: koData, en: enData }} node={overview} showAttachments />;
}
