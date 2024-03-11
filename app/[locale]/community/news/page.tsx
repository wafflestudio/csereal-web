// TODO: searchParams를 사용했으므로 자동 dynamic 처리되어야할 것 같은데 안되어 추가
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
      <NewsPageContent data={data} key={searchParams + ''} />
    </Suspense>
  );
}
