import { getNewsPostDetail } from '@/apis/news';

import AdjPostNav from '@/components/common/AdjPostNav';
import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { news } from '@/types/page';
import { PostSearchQueryParams } from '@/types/post';

import { getAdjPostsInfo } from '@/utils/getAdjPostInfo';
import { getPath } from '@/utils/page';

interface NewsPostPageProps {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}

const newsPath = getPath(news);

export default async function NewsPostPage({ params, searchParams }: NewsPostPageProps) {
  const currPost = await getNewsPostDetail(parseInt(params.id), searchParams);
  const { prevPostPreview, nextPostPreview } = getAdjPostsInfo(currPost, searchParams, newsPath);

  return (
    <PageLayout title={currPost.title} titleType="small" titleMargin="mb-5">
      {currPost.attachments.length !== 0 && <Attachments files={currPost.attachments} />}
      <HTMLViewer htmlContent={currPost.description} margin="mt-4" />
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
