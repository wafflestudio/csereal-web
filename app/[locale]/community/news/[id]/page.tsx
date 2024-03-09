import { getNewsPostDetail } from '@/actions/newsServer';

import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import AdjPostNav from '@/components/post/AdjPostNav';

import { PostSearchQueryParams } from '@/types/post';

import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

interface NewsPostPageProps {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}

const newsPath = getPath(news);

export default async function NewsPostPage({ params, searchParams }: NewsPostPageProps) {
  const news = await getNewsPostDetail(parseInt(params.id), searchParams);

  const date = new Date(news.date);
  const dateStr = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${date.toLocaleString('ko-KR', { weekday: 'long' })}`;

  return (
    <PageLayout title={news.title} titleType="small" titleMargin="mb-5">
      {news.attachments.length !== 0 && <Attachments files={news.attachments} />}
      <HTMLViewer
        htmlContent={news.description}
        className="mt-4"
        topRightContent={
          news.imageURL ? { type: 'imageUnoptimized', url: news.imageURL, widthPX: 320 } : undefined
        }
      />
      <time className=" mt-12 block text-end text-sm font-bold">{dateStr}</time>
      <StraightNode margin="mt-[2.4375rem]" />
      <Tags tags={news.tags} margin="mt-3 ml-6" searchPath={newsPath} />
      <AdjPostNav post={news} postType="news" id={params.id} margin="mt-12" />
    </PageLayout>
  );
}
