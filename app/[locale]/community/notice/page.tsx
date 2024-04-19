// TODO: searchParams를 사용했으므로 자동 dynamic 처리되어야할 것 같은데 안되어 추가
export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { getNoticePosts } from '@/apis/notice';

import NoticePageContent from '@/app/[locale]/community/notice/NoticePageContent';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import { validatePageNum } from '@/utils/validatePageNum';

interface NoticePageParams {
  searchParams: PostSearchQueryParams;
}

export default async function NoticePage({ searchParams }: NoticePageParams) {
  if (searchParams.pageNum && !validatePageNum(searchParams.pageNum)) {
    notFound();
  }

  const data = await getNoticePosts(searchParams);

  return (
    <PageLayout titleType="big">
      <Suspense>
        <NoticePageContent data={data} />
      </Suspense>
    </PageLayout>
  );
}
