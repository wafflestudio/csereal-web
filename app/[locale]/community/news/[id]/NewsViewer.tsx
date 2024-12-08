// TODO: searchParams를 사용했음에도 static rendering이 되는 것 같아 추가
export const dynamic = 'force-dynamic';

import PostFooter from '@/app/[locale]/community/components/PostFooter';
import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import { PAGE_PADDING_BOTTOM_PX } from '@/components/layout/pageLayout/PageLayout';
import { News } from '@/types/news';
import { formatNewsPostDateStr } from '@/utils/date';
import { getPath } from '@/utils/page';
import { news } from '@/constants/segmentNode';

interface NewsPostPageProps {
  news: News;
}

const newsPath = getPath(news);

export default async function NewsViewer({ news }: NewsPostPageProps) {
  return (
    <>
      <Header title={news.title} date={news.date} />
      <div
        className="bg-neutral-50 px-5 pt-9 sm:pl-[100px] sm:pr-[340px]"
        style={{ paddingBottom: PAGE_PADDING_BOTTOM_PX }}
      >
        <Attachments files={news.attachments} />
        <HTMLViewer
          htmlContent={news.description}
          topRightContent={
            news.imageURL
              ? { type: 'image', url: news.imageURL, widthPX: 320, heightPX: 240 }
              : undefined
          }
          className="mb-10"
        />
        <StraightNode />
        <Tags tags={news.tags} margin="mt-3 ml-6" searchPath={newsPath} />
        <PostFooter post={news} postType="news" id={news.id.toString()} margin="mt-12" />
      </div>
    </>
  );
}

function Header({ title, date }: { title: string; date: string }) {
  return (
    <div className="flex flex-col gap-4 px-5 py-9 sm:pl-[100px] sm:pr-[340px]">
      <h2 className="text-[1.25rem] font-semibold leading-[1.4]">{title}</h2>
      <time className="text-sm font-normal tracking-wide text-neutral-500">
        {formatNewsPostDateStr(date)}
      </time>
    </div>
  );
}
