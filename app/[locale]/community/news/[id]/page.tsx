import { Suspense } from 'react';

import { getNewsDetail } from '@/apis/news';

import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import PostFallback from '@/components/layout/fallback/PostFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import { getMetadata } from '@/utils/metadata';
import { news } from '@/utils/segmentNode';

import NewsViewer from './NewsViewer';

export async function generateMetadata({
  params: { locale, id },
  searchParams,
}: NewsPostPageProps) {
  try {
    const newsPost = await getNewsDetail(parseInt(id), searchParams);

    return await getMetadata({
      locale,
      node: news,
      metadata: {
        title: `${newsPost.title}`,
      },
    });
  } catch {
    return {};
  }
}

interface NewsPostPageProps {
  params: { id: string; locale: string };
  searchParams: PostSearchQueryParams;
}

export default async function NewsPostPage({ params, searchParams }: NewsPostPageProps) {
  const id = parseInt(params.id);
  if (Number.isNaN(id)) throw new Error('/news/[id]: id가 숫자가 아닙니다.');

  try {
    const news = await getNewsDetail(id, searchParams);

    return (
      <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
        <Suspense fallback={<PostFallback />}>
          <NewsViewer news={news} />
        </Suspense>
      </PageLayout>
    );
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
