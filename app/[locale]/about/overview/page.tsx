import Image from 'next/image';

import brochure1 from '@/public/image/about/brochure1.png';
import brochure2 from '@/public/image/about/brochure2.png';

import { getOverview } from '@/apis/about';

import Attachment from '@/components/common/Attachments';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

// 학부 소개 페이지 - 학부장 인삿말 페이지의 형식이 동일
// 두 곳에서만 겹쳐서 따로 컴포넌트화하지 않음
export default async function OverviewPage() {
  const { description, attachments } = await getOverview();

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <div className="flex items-start gap-10 bg-neutral-100 py-10 pl-[6.25rem] pr-[22rem]">
        <HTMLViewer htmlContent={description} className="w-[37.5rem] shrink-0" />
        <Image
          src="https://cse-dev-waffle.bacchus.io/sites/default/files/styles/medium-larger/public/node--page/301302.jpg?itok=96k1IsL0"
          alt="학교 전경"
          width={320}
          height={213}
        />
      </div>
      <div className="pb-[7.88rem] pl-[6.25rem] pt-10">
        <h2 className="mb-6 text-base font-semibold">학부 소개 책자</h2>
        <div className="mb-10 flex gap-6">
          <Image src={brochure1.src} width={227} height={320} alt="소개 책자" />
          <Image src={brochure2.src} width={227} height={320} alt="소개 책자" />
        </div>
        <Attachment files={attachments} />
      </div>
    </PageLayout>
  );
}
