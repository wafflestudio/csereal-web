import { Suspense } from 'react';

import PostFallback from '@/components/layout/fallback/PostFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import NewsViewer from './NewsViewer';

interface NewsPostPageProps {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}

export default async function NewsPostPage({ params, searchParams }: NewsPostPageProps) {
  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <Suspense fallback={<PostFallback />}>
        <NewsViewer id={parseInt(params.id)} searchParams={searchParams} />
      </Suspense>
    </PageLayout>
  );
}
