// TODO: searchParams를 사용했음에도 static rendering이 되는 것 같아 추가
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';

import { getSeminarPosts } from '@/apis/seminar';

import SeminarContent from '@/app/[locale]/community/seminar/SeminarContent';

import { PostSearchQueryParams } from '@/types/post';

interface SeminarPageParams {
  searchParams: PostSearchQueryParams;
}

export default async function SeminarPage({ searchParams }: SeminarPageParams) {
  const data = await getSeminarPosts(searchParams);

  // https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
  return (
    <Suspense>
      <SeminarContent data={data} />
    </Suspense>
  );
}
