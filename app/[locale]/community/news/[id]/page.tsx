import { Suspense } from 'react';

import { PostSearchQueryParams } from '@/apis/types/post';
import { getNewsDetail } from '@/apis/v2/news/[id]';
import PostFallback from '@/app/[locale]/community/components/PostFallback';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { news } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

import NewsViewer from './NewsViewer';

export async function generateMetadata(props: NewsPostPageProps) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const { locale, id } = params;

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
  params: Promise<{ id: string; locale: string }>;
  searchParams: Promise<PostSearchQueryParams>;
}

export default async function NewsPostPage(props: NewsPostPageProps) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const id = parseInt(params.id);
  if (Number.isNaN(id)) throw new Error('/news/[id]: id가 숫자가 아닙니다.');

  try {
    const news = await getNewsDetail(id, searchParams);

    return (
      <PageLayout titleType="big" removePadding>
        <Suspense fallback={<PostFallback />}>
          <NewsViewer news={news} />
        </Suspense>
      </PageLayout>
    );
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
