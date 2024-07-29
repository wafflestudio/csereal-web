export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import brochure1 from '@/public/image/about/brochure1.png';
import brochure2 from '@/public/image/about/brochure2.png';

import { getOverview } from '@/apis/about';

import Attachments from '@/components/common/Attachments';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getMetadata } from '@/utils/metadata';
import { overview } from '@/utils/segmentNode';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { imageURL } = await getOverview();

  return await getMetadata({
    locale,
    node: overview,
    metadata: { openGraph: { images: [imageURL] } },
  });
}

// 학부 소개 페이지 - 학부장 인삿말 페이지의 형식이 동일
// 두 곳에서만 겹쳐서 따로 컴포넌트화하지 않음
export default async function OverviewPage() {
  const { description, attachments, imageURL } = await getOverview();
  const t = await getTranslations('Content');

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <div className="flex flex-col-reverse items-start gap-6 bg-neutral-100 px-5 pb-12 pt-7 sm:flex-row sm:gap-10 sm:py-11 sm:pl-[6.25rem] sm:pr-[22.5rem]">
        <HTMLViewer htmlContent={description} className="sm:w-[20rem] sm:grow" />
        {/* image 크기를 반응형으로 줄이기 위해 필요한 wrapper div */}
        <div className="w-full sm:w-auto">
          <Image
            src={imageURL}
            alt="학교 전경"
            width={320}
            height={216}
            className="w-full object-contain sm:w-80"
          />
        </div>
      </div>
      <div className="px-5 pb-16 pt-10 sm:pb-[7.88rem] sm:pl-[6.25rem] sm:pr-[22.5rem]">
        <h2 className="mb-6 text-base font-semibold">{t('학부 소개 책자')}</h2>
        <div className="mb-10 flex flex-col gap-6 sm:flex-row">
          <Image src={brochure1.src} width={227} height={320} alt="소개 책자" />
          <Image src={brochure2.src} width={227} height={320} alt="소개 책자" />
        </div>
        <Attachments files={attachments} />
      </div>
    </PageLayout>
  );
}
