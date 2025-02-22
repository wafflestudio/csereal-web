export const dynamic = 'force-dynamic';

import { getCouncilRule } from '@/apis/v2/council/rule';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function CouncilIntroPage() {
  const resp = await getCouncilRule();
  console.log(resp);

  return (
    <PageLayout titleType="big" removePadding>
      TODO
    </PageLayout>
  );
}
