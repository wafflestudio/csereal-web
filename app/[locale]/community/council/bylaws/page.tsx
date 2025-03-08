export const dynamic = 'force-dynamic';

import { getCouncilRule } from '@/apis/v2/council/rule';
import CouncilAttachment from '@/app/[locale]/community/council/components/CouncilAttachments';
import { EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilBylaws } from '@/constants/segmentNode';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

export async function generateMetadata(props: { params: Promise<{ locale: Language }> }) {
  const params = await props.params;
  const { locale } = params;

  return await getMetadata({ locale, node: councilBylaws });
}

const editPath = `${getPath(councilBylaws)}/edit`;

export default async function CouncilIntroPage() {
  const resp = await getCouncilRule();

  return (
    <PageLayout titleType="big">
      <LoginVisible role={['ROLE_STAFF', 'ROLE_COUNCIL']}>
        <div className="flex justify-end">
          <EditButton href={editPath} />
        </div>
      </LoginVisible>

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
