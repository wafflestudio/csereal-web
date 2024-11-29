import { getOverview } from '@/apis/v1/about/overview';
import { overview } from '@/utils/segmentNode';

import AboutEditPageContent from '../../AboutEditPageContent';

export default async function OverviewEditPage() {
  const [koData, enData] = await Promise.all([getOverview('ko'), getOverview('en')]);

  return <AboutEditPageContent data={{ ko: koData, en: enData }} node={overview} showAttachments />;
}
