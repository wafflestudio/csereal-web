// TODO: searchParams를 사용했으므로 자동 dynamic 처리되어야할 것 같은데 안되어 추가
export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { PostSearchQueryParams } from '@/apis/types/post';
import { getNewsPosts } from '@/apis/v1/news';
import NewsPageContent from '@/app/[locale]/community/news/components/NewsPageContent';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { news } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';
import { validatePageNum, validateTag } from '@/utils/validateSearchParams';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: news });
}

interface NewsPageParams {
  searchParams: Promise<PostSearchQueryParams>;
}

export default async function NewsPage(props: NewsPageParams) {
  const searchParams = await props.searchParams;
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
