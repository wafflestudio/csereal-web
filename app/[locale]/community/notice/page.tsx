export const dynamic = 'force-dynamic';

import { Suspense } from 'react';

import { getNoticePosts } from '@/apis/notice';

import NoticePageContent from '@/app/[locale]/community/notice/NoticePageContent';

import { PostSearchQueryParams } from '@/types/post';

interface NoticePageParams {
  searchParams: PostSearchQueryParams;
}

export default async function NoticePage({ searchParams }: NoticePageParams) {
  const data = await getNoticePosts(searchParams);

  return (
    // https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
    <Suspense>
      <NoticePageContent data={data} />
    </Suspense>
  );
}
