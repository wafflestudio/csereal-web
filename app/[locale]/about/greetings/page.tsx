export const dynamic = 'force-dynamic';

import Image from 'next/image';

import { getGreetings } from '@/apis/v1/about/greetings';
import { EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { greetings } from '@/utils/segmentNode';

interface GreetingsPageProps {
  params: { locale: Language };
}

export async function generateMetadata({ params: { locale } }: GreetingsPageProps) {
  return await getMetadata({ locale, node: greetings });
}

const greetingsPath = getPath(greetings);

// 학부 소개 페이지 - 학부장 인사말 페이지의 형식이 동일
// 두 곳에서만 겹쳐서 따로 컴포넌트화하지 않음
export default async function GreetingsPage({ params }: GreetingsPageProps) {
  const { description, imageURL } = await getGreetings(params.locale);

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <div className="px-5 pb-12 pt-7 sm:py-11 sm:pl-[6.25rem] sm:pr-[360px]">
        <LoginVisible staff>
          <div className="mb-8 text-right">
            <EditButton href={`${greetingsPath}/edit`} />
          </div>
        </LoginVisible>
        <div className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:gap-10">
          <HTMLViewer htmlContent={description} className="sm:w-[25rem] sm:grow" />
          {/* image 크기를 반응형으로 줄이기 위해 필요한 wrapper div */}
          {imageURL && (
            <div>
              <Image src={imageURL} alt="학부장" width={212} height={280} />
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
