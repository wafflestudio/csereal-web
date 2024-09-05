import { getOverview } from '@/apis/about';
import { overview } from '@/utils/segmentNode';

import AboutEditPageContent from '../../AboutEditPageContent';

export default async function OverviewEditPage() {
  const [koData, enData] = await Promise.all([getOverview('ko'), getOverview('en')]);

  return <AboutEditPageContent data={{ ko: koData, en: enData }} node={overview} showAttachments />;
}
