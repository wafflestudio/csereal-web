// TODO: searchParams를 사용했음에도 static rendering이 되는 것 같아 추가
export const dynamic = 'force-dynamic';

import { deleteNewsAction } from '@/actions/news';
import { News } from '@/apis/types/news';
import PostFooter from '@/app/[locale]/community/components/PostFooter';
import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import { PAGE_PADDING_BOTTOM_TAILWIND } from '@/components/layout/pageLayout/paddings';
import { news } from '@/constants/segmentNode';
import { useDayjs } from '@/utils/hooks/useDayjs';
import { getPath } from '@/utils/page';

interface NewsPostPageProps {
  news: News;
}

const newsPath = getPath(news);

export default async function NewsViewer({ news }: NewsPostPageProps) {
  return (
    <>
      <Header title={news.title} date={news.date} />
      <div
        className={`bg-neutral-50 px-5 pt-9 sm:pl-[100px] sm:pr-[340px] ${PAGE_PADDING_BOTTOM_TAILWIND}`}
      >
        <Attachments files={news.attachments} />
        <HTMLViewer
          htmlContent={news.description}
          topRightContent={
            news.imageURL
              ? { type: 'image', url: news.imageURL, widthPX: 320, heightPX: 240 }
              : undefined
          }
          wrapperClassName="mb-10"
        />
        <StraightNode />
        <Tags tags={news.tags} margin="mt-3 ml-6" searchPath={newsPath} />
        <PostFooter
          post={news}
          id={news.id.toString()}
          deleteAction={deleteNewsAction}
          margin="mt-12"
          path={newsPath}
        />
      </div>
    </>
  );
}

function Header({ title, date }: { title: string; date: string }) {
  const formatDate = useDayjs();
  return (
    <div className="flex flex-col gap-4 px-5 py-9 sm:pl-[100px] sm:pr-[340px]">
      <h2 className="text-[1.25rem] font-semibold leading-[1.4]">{title}</h2>
      <time className="text-sm font-normal tracking-wide text-neutral-500">
        {formatDate ? formatDate({ date: date, format: 'day' }) : ''}
      </time>
    </div>
  );
}
