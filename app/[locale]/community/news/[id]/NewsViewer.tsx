// TODO: searchParams를 사용했음에도 static rendering이 되는 것 같아 추가
export const dynamic = 'force-dynamic';

import { getNewsDetail } from '@/apis/news';

import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import HTMLViewer from '@/components/editor/HTMLViewer';
import { PAGE_PADDING_BOTTOM_PX } from '@/components/layout/pageLayout/PageLayout';
import PostFooter from '@/components/post/PostFooter';

import { PostSearchQueryParams } from '@/types/post';

import { formatNewsPostDateStr } from '@/utils/date';
import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

interface NewsPostPageProps {
  id: number;
  searchParams: PostSearchQueryParams;
}

const newsPath = getPath(news);

export default async function NewsViewer({ id, searchParams }: NewsPostPageProps) {
  const news = await getNewsDetail(id, searchParams);

  return (
    <>
      <Header title={news.title} createdAt={news.createdAt} />
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
        <PostFooter post={news} postType="news" id={id.toString()} margin="mt-12" />
      </div>
    </>
  );
}

function Header({ title, createdAt }: { title: string; createdAt: string }) {
  return (
    <div className="flex flex-col gap-4 px-5 py-9 sm:pl-[100px] sm:pr-[340px]">
      <h2 className="text-[1.25rem] font-semibold leading-[1.4]">{title}</h2>
      <time className="text-sm font-normal tracking-wide text-neutral-500">
        작성 일자: {formatNewsPostDateStr(createdAt)}
      </time>
    </div>
  );
}
