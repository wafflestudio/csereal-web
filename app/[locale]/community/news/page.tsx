// TODO: searchParams를 사용했음에도 static rendering이 되는 것 같아 추가
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';

import { getNewsPosts } from '@/apis/news';

import NewsPageContent from '@/app/[locale]/community/news/NewsPageContent';

import { PostSearchQueryParams } from '@/types/post';

interface NewsPageParams {
  searchParams: PostSearchQueryParams;
}

export default async function NewsPage({ searchParams }: NewsPageParams) {
  const data = await getNewsPosts(searchParams);
  return (
    // https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
    <Suspense>
      <NewsPageContent data={data} />
    </Suspense>
  );
}
