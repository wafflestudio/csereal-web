export const dynamic = 'force-dynamic';

import { Attachment } from '@/apis/types/attachment';
import { getCouncilRule } from '@/apis/v2/council/rule';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import Clip from '@/public/image/clip.svg';

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
        <AttachmentRow key={attachment.id} {...attachment} />
      ))}

      <h3 className="mb-[20px] mt-[40px] text-[20px] font-semibold text-neutral-950">세칙</h3>

      {resp.bylaw.attachments.map((attachment) => (
        <AttachmentRow key={attachment.id} {...attachment} />
      ))}
    </PageLayout>
  );
}

const AttachmentRow = ({ name, bytes, url }: Attachment) => {
  return (
    <div className="relative mt-[25px] w-[720px] rounded-[2px] border border-neutral-200 bg-neutral-50 p-[16px]">
      <a
        className="flex text-base font-medium text-neutral-700 hover:underline"
        href={encodeURI(url)}
        download={name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">{name}</span>
        &nbsp;
        <span>({bytes / 10}KB)</span>
      </a>
      <Clip className="absolute right-2 top-[-1.5rem]" />
    </div>
  );
};
