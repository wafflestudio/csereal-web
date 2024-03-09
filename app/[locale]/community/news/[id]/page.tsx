import { getNewsPostDetail } from '@/actions/newsServer';

import AdjPostNav from '@/components/common/AdjPostNav';
import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import { getAdjPostsInfo } from '@/utils/getAdjPostInfo';
import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

interface NewsPostPageProps {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}

const newsPath = getPath(news);

export default async function NewsPostPage({ params, searchParams }: NewsPostPageProps) {
  const currPost = await getNewsPostDetail(parseInt(params.id), searchParams);
  const { prevPostPreview, nextPostPreview } = getAdjPostsInfo(currPost, searchParams, newsPath);
  const date = new Date(currPost.date);
  const dateStr = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${date.toLocaleString('ko-KR', { weekday: 'long' })}`;

  return (
    <PageLayout title={currPost.title} titleType="small" titleMargin="mb-5">
      {currPost.attachments.length !== 0 && <Attachments files={currPost.attachments} />}
      <HTMLViewer
        htmlContent={currPost.description}
        className="mt-4"
        topRightContent={
          currPost.imageURL
            ? { type: 'imageUnoptimized', url: currPost.imageURL, widthPX: 320 }
            : undefined
        }
      />
      <time className=" mt-12 block text-end text-sm font-bold">{dateStr}</time>
      <StraightNode margin="mt-[2.4375rem]" />
      <Tags tags={currPost.tags} margin="mt-3 ml-6" searchPath={newsPath} />
      <AdjPostNav
        prevPost={prevPostPreview}
        nextPost={nextPostPreview}
        postType="news"
        id={params.id}
        margin="mt-12"
      />
    </PageLayout>
  );
}
