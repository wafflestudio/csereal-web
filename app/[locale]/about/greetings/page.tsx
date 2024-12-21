export const dynamic = 'force-dynamic';

import { getGreetings } from '@/apis/v1/about/greetings';
import { EditButton } from '@/components/common/Buttons';
import Image from '@/components/common/Image';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { greetings } from '@/constants/segmentNode';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

interface GreetingsPageProps {
  params: Promise<{ locale: Language }>;
}

export async function generateMetadata(props: GreetingsPageProps) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: greetings });
}

const greetingsPath = getPath(greetings);

export default async function GreetingsPage(props: GreetingsPageProps) {
  const params = await props.params;
  const { description, imageURL } = await getGreetings(params.locale);

  return (
    <PageLayout titleType="big" bodyClassName="p-0">
      <div className="px-5 pb-12 pt-7 sm:py-11 sm:pl-[6.25rem] sm:pr-[360px]">
        <LoginVisible staff>
          <div className="mb-8 text-right">
            <EditButton href={`${greetingsPath}/edit`} />
          </div>
        </LoginVisible>
        <div className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:gap-10">
          <HTMLViewer htmlContent={description} wrapperClassName="sm:w-[25rem] sm:grow" />
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
