// TODO: searchParams를 사용했으므로 자동 dynamic 처리되어야할 것 같은데 안되어 추가
export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { getNewsPosts } from '@/apis/v1/news';
import NewsPageContent from '@/app/[locale]/community/news/components/NewsPageContent';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { PostSearchQueryParams } from '@/types/post';
import { getMetadata } from '@/utils/metadata';
import { news } from '@/utils/segmentNode';
import { validatePageNum, validateTag } from '@/utils/validateSearchParams';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: news });
}

interface NewsPageParams {
  searchParams: PostSearchQueryParams;
}

export default async function NewsPage({ searchParams }: NewsPageParams) {
  if (!validatePageNum(searchParams.pageNum) || !validateTag('news', searchParams.tag)) {
    notFound();
  }

  const data = await getNewsPosts(searchParams);

  return (
    <PageLayout titleType="big">
      {/* TODO: fallback */}
      <Suspense>
        <NewsPageContent data={data} />
      </Suspense>
    </PageLayout>
  );
}
