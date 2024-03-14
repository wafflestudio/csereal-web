/* eslint-disable no-irregular-whitespace */
import Image from 'next/image';

import greetings from '@/public/image/about/greetings.jpg';

import { getGreetings } from '@/apis/about';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

// 학부 소개 페이지 - 학부장 인사말 페이지의 형식이 동일
// 두 곳에서만 겹쳐서 따로 컴포넌트화하지 않음
export default async function GreetingsPage() {
  const { description } = await getGreetings();

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <div className="flex flex-col-reverse items-start gap-6 bg-neutral-100 px-5 pb-12 pt-7 sm:flex-row sm:gap-10 sm:py-11 sm:pl-[6.25rem] sm:pr-[360px]">
        <HTMLViewer htmlContent={description} className="sm:w-[25rem] sm:grow" />
        {/* TODO: 레이아웃이 바뀌어 사진은 백엔드에서 가져오지 않는데 어떻게 처리할지 고민 필요 */}
        {/* image 크기를 반응형으로 줄이기 위해 필요한 wrapper div */}
        <div>
          <Image src={greetings.src} alt="학부장" width={212} height={280} />
        </div>
      </div>
    </PageLayout>
  );
}
