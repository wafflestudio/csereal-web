import { getNewsPostDetail } from '@/actions/newsServer';

import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout, { PAGE_PADDING_BOTTOM_PX } from '@/components/layout/pageLayout/PageLayout';
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
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <h2 className="px-5 py-9 text-[1.25rem] font-semibold sm:pl-[100px] sm:pr-[340px]">
        {news.title}
      </h2>

      <div
        className="bg-neutral-50 px-5 pt-9 sm:pl-[100px] sm:pr-[340px]"
        style={{
          paddingBottom: PAGE_PADDING_BOTTOM_PX,
        }}
      >
        <Attachments files={news.attachments} />
        <HTMLViewer htmlContent={news.description} className="mb-10" />
        <time className="mb-3 mt-12 block text-end text-sm font-bold">{dateStr}</time>
        <StraightNode />
        <Tags tags={news.tags} margin="mt-3 ml-6" searchPath={newsPath} />
        <AdjPostNav post={news} postType="notice" id={params.id} margin="mt-12" />
      </div>
    </PageLayout>
  );
}
