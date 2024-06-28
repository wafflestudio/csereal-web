import { Suspense } from 'react';

import { getNewsDetail } from '@/apis/news';

import PostFallback from '@/components/layout/fallback/PostFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { news } from '@/constants/navTreeNode';

import { PostSearchQueryParams } from '@/types/post';

import { getMetadata } from '@/utils/metadata';

import NewsViewer from './NewsViewer';

export async function generateMetadata({
  params: { locale, id },
  searchParams,
}: NewsPostPageProps) {
  const newsPost = await getNewsDetail(parseInt(id), searchParams);

  return await getMetadata({
    locale,
    node: news,
    metadata: {
      title: `${newsPost.title}`,
    },
  });
}

interface NewsPostPageProps {
  params: { id: string; locale: string };
  searchParams: PostSearchQueryParams;
}

export default async function NewsPostPage({ params, searchParams }: NewsPostPageProps) {
  const id = parseInt(params.id);
  if (Number.isNaN(id)) throw new Error('/news/[id]: id가 숫자가 아닙니다.');

  const news = await getNewsDetail(id, searchParams);

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <Suspense fallback={<PostFallback />}>
        <NewsViewer news={news} />
      </Suspense>
    </PageLayout>
  );
}
