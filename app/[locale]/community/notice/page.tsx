// TODO: searchParams를 사용했으므로 자동 dynamic 처리되어야할 것 같은데 안되어 추가
export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { getNoticePosts } from '@/apis/notice';

import NoticePageContent from '@/app/[locale]/community/notice/NoticePageContent';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import { getMetadata } from '@/utils/metadata';
import { notice } from '@/utils/segmentNode';
import { validatePageNum } from '@/utils/validatePageNum';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: notice });
}
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
