import { Metadata } from 'next';
import { Suspense } from 'react';

import { getNewsDetail } from '@/apis/news';

import PostFallback from '@/components/layout/fallback/PostFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import NewsViewer from './NewsViewer';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}): Promise<Metadata> {
  const news = await getNewsDetail(parseInt(params.id), searchParams);

  return {
    title: `${news.title}`,
    description: `서울대학교 컴퓨터공학부 새소식 페이지입니다.`,
  };
}

interface NewsPostPageProps {
  params: { id: string };
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
