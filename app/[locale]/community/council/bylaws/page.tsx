export const dynamic = 'force-dynamic';

import { getCouncilRule } from '@/apis/v2/council/rule';
import CouncilAttachment from '@/app/[locale]/community/council/components/CouncilAttachments';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function CouncilIntroPage() {
  const resp = await getCouncilRule();

  // TODO: mock 제거
  resp.bylaw = {
    type: '',
    attachments: [
      {
        id: 1,
        name: '서울대학교 컴퓨터공학부 학생회칙 [개정 2023.10.13.].pdf',
        url: 'https://www.google.com',
        bytes: 123456,
      },
    ],
  };

  resp.constitution = {
    type: '',
    attachments: [
      {
        id: 2,
        name: '서울대학교 컴퓨터공학부 선거시행세칙 [개정 2023.10.13.].pdf (00.00 KB)',
        url: 'https://www.google.com',
        bytes: 123456,
      },
      {
        id: 3,
        name: '서울대학교 컴퓨터공학부 선거시행세칙 [개정 2023.10.13.].pdf (00.00 KB)',
        url: 'https://www.google.com',
        bytes: 123456,
      },
    ],
  };

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
