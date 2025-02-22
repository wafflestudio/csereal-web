export const dynamic = 'force-dynamic';

import { getCouncilRule } from '@/apis/v2/council/rule';
import CouncilAttachment from '@/app/[locale]/community/council/components/CouncilAttachments';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function CouncilIntroPage() {
  const resp = await getCouncilRule();

  return (
    <PageLayout titleType="big">
      <h3 className="mb-[20px] text-[20px] font-semibold text-neutral-950">학생회칙</h3>

      {resp.constitution.attachments.map((attachment) => (
        <CouncilAttachment key={attachment.id} {...attachment} />
      ))}

      <h3 className="mb-[20px] mt-[40px] text-[20px] font-semibold text-neutral-950">세칙</h3>

      {resp.bylaw.attachments.map((attachment) => (
        <CouncilAttachment key={attachment.id} {...attachment} />
      ))}
    </PageLayout>
  );
}
