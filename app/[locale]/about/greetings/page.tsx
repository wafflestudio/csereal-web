/* eslint-disable no-irregular-whitespace */
import Image from 'next/image';

import greetings from '@/public/image/about/greetings.jpg';

import { getGreetings } from '@/apis/about';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

// 학부 소개 페이지 - 학부장 인삿말 페이지의 형식이 동일
// 두 곳에서만 겹쳐서 따로 컴포넌트화하지 않음
export default async function GreetingsPage() {
  const { description } = await getGreetings();

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <div className="flex items-start gap-12 bg-neutral-100 py-10 pl-[6.25rem] pr-[22rem]">
        <HTMLViewer htmlContent={description} className="w-[37.5rem] shrink-0" />
        {/* TODO: 레이아웃이 바뀌어 사진은 백엔드에서 가져오지 않는데 어떻게 처리할지 고민 필요 */}
        <Image src={greetings.src} alt="학부장" width={212} height={280} />
      </div>
    </PageLayout>
  );
}
