import { cookies } from 'next/headers';
import { Suspense } from 'react';

import { getNoticePosts } from '@/apis/notice';

import NoticePageContent from '@/app/[locale]/community/notice/NoticePageContent';

import { PostSearchQueryParams } from '@/types/post';

interface NoticePageParams {
  searchParams: PostSearchQueryParams;
}

export default async function NoticePage({ searchParams }: NoticePageParams) {
  const data = await getNoticePosts(searchParams);

  // TODO: searchParams를 사용했음에도 dynamic-render가 안되어 pageNum이 반영안됨
  // 따라서 cookies를 호출해 강제로 설정
  cookies();

  return (
    // https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
    <Suspense>
      <NoticePageContent data={data} />
    </Suspense>
  );
}
