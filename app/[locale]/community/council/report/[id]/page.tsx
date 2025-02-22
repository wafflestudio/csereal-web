import 'dayjs/locale/ko';

import dayjs from 'dayjs';
import { getTranslations } from 'next-intl/server';

import { getCouncilReport } from '@/apis/v2/council/report/[id]';
import PostFooter from '@/app/[locale]/community/components/PostFooter';
import { StraightNode } from '@/components/common/Nodes';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import { PAGE_PADDING_BOTTOM_TAILWIND } from '@/components/layout/pageLayout/paddings';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function CouncilReport({
  params,
}: {
  params: Promise<{ id: number; locale: string }>;
}) {
  const { id, locale } = await params;
  const t = await getTranslations({ locale });
  const council = await getCouncilReport(id);

  const { title, description, sequence, name, createdAt } = council;
  const author = `제${sequence}대 학생회 ${name}`;
  const dateStr = dayjs(createdAt).locale('ko').format('YYYY/MM/DD (ddd) A h:mm');

  return (
    <PageLayout titleType="big" removePadding>
      <div className="flex flex-col gap-4 px-5 py-9 sm:pl-[100px] sm:pr-[340px]">
        <h2 className="text-[1.25rem] font-semibold leading-[1.4]">{title}</h2>
        <div className="flex gap-5 text-sm font-normal tracking-wide text-neutral-500">
          <p>
            {t('작성자')}: {author}
          </p>
          <p>
            {t('작성 날짜')}: {dateStr}
          </p>
        </div>
      </div>

      <div
        className={`bg-neutral-50 px-5 pt-9 sm:pl-[100px] sm:pr-[340px] ${PAGE_PADDING_BOTTOM_TAILWIND}`}
      >
        <HTMLViewer htmlContent={description} wrapperClassName="mb-10" />
        <StraightNode />
        <PostFooter post={council} postType="council/report" id={id.toString()} margin="mt-12" />
      </div>
    </PageLayout>
  );
}
