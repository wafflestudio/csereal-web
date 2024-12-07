// TODO: searchParams를 사용했으므로 자동 dynamic 처리되어야할 것 같은데 안되어 추가
export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { getNoticePosts } from '@/apis/v1/notice';
import NoticePageContent from '@/app/[locale]/community/notice/NoticePageContent';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { PostSearchQueryParams } from '@/types/post';
import { getMetadata } from '@/utils/metadata';
import { notice } from '@/constants/segmentNode';
import { validatePageNum, validateTag } from '@/utils/validateSearchParams';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: notice });
}

interface NoticePageParams {
  searchParams: Promise<PostSearchQueryParams>;
}

export default async function NoticePage(props: NoticePageParams) {
  const searchParams = await props.searchParams;
  if (!validatePageNum(searchParams.pageNum) || !validateTag('notice', searchParams.tag)) {
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
