import { cookies } from 'next/headers';
import { Suspense } from 'react';

import { getNewsPosts } from '@/apis/news';

import NewsPageContent from '@/app/[locale]/community/news/NewsPageContent';

import { PostSearchQueryParams } from '@/types/post';

interface NewsPageParams {
  searchParams: PostSearchQueryParams;
}

export default async function NewsPage({ searchParams }: NewsPageParams) {
  const data = await getNewsPosts(searchParams);

  // TODO: searchParams를 사용했음에도 dynamic-render가 안되어 pageNum이 반영안됨
  // 따라서 cookies를 호출해 강제로 설정
  cookies();

  return (
    // https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
    <Suspense>
      <NewsPageContent data={data} key={searchParams + ''} />
    </Suspense>
  );
}
