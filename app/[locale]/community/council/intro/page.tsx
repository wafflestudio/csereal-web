export const dynamic = 'force-dynamic';

import { getCouncilIntro } from '@/apis/v2/council/intro';
import { EditButton } from '@/components/common/Buttons';
import Image from '@/components/common/Image';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { councilIntro } from '@/constants/segmentNode';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

export async function generateMetadata(props: { params: Promise<{ locale: Language }> }) {
  const params = await props.params;

  const { locale } = params;

  const { imageURL } = await getCouncilIntro();

  return await getMetadata({
    locale,
    node: councilIntro,
    metadata: { openGraph: { images: imageURL ? [imageURL] : undefined } },
  });
}

const councilPath = getPath(councilIntro);

export default async function CouncilIntroPage() {
  const { description, imageURL } = await getCouncilIntro();

  return (
    <PageLayout titleType="big" removePadding>
      <div className="bg-neutral-100 px-5 pb-12 pt-7 sm:py-11 sm:pl-[6.25rem] sm:pr-[22.5rem]">
        <LoginVisible staff>
          <div className="mb-8 text-right">
            <EditButton href={`${councilPath}/edit`} />
          </div>
        </LoginVisible>
        <HTMLViewer htmlContent={description} />
      </div>
      <div className="px-5 pb-16 pt-10 sm:pl-[6.25rem] sm:pr-[22.5rem]">
        <h2 className="mb-6 text-base font-semibold">구성도</h2>
        <Image
          src={imageURL}
          alt="학생회_구성도"
          width={320}
          height={216}
          className="w-full object-contain sm:w-80"
        />
      </div>
    </PageLayout>
  );
}
