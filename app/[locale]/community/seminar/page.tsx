import { cookies } from 'next/headers';
import { Suspense } from 'react';

import { getSeminarPosts } from '@/apis/seminar';

import SeminarContent from '@/app/[locale]/community/seminar/SeminarContent';

import { PostSearchQueryParams } from '@/types/post';

interface SeminarPageParams {
  searchParams: PostSearchQueryParams;
}

export default async function SeminarPage({ searchParams }: SeminarPageParams) {
  const data = await getSeminarPosts(searchParams);

  // TODO: searchParams를 사용했음에도 dynamic-render가 안되어 pageNum이 반영안됨
  // 따라서 cookies를 호출해 강제로 설정
  cookies();

  // https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
  return (
    <Suspense>
      <SeminarContent data={data} />
    </Suspense>
  );
}
