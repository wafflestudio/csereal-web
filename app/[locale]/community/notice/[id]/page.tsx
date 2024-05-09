import { Metadata } from 'next';
import { Suspense } from 'react';

import { getNoticePostDetail } from '@/apis/notice';

import PostFallback from '@/components/layout/fallback/PostFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import { getMetadata } from '@/utils/metadata';
import { notice } from '@/utils/segmentNode';

import NoticeViewer from './NoticeViewer';

export async function generateMetadata({
  params: { locale, id },
  searchParams,
}: {
  params: { locale: string; id: string };
  searchParams: PostSearchQueryParams;
}): Promise<Metadata> {
  const noticePost = await getNoticePostDetail(parseInt(id), searchParams);

  return await getMetadata({
    locale,
    node: notice,
    metadata: {
      title: `${noticePost.title}`,
    },
  });
}

interface NoticePostPageProps {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}

export default async function NoticePostPage({
  params: { id: rawID },
  searchParams,
}: NoticePostPageProps) {
  const id = +rawID;

  // ID가 잘못된 경우 예외 처리
  if (Number.isNaN(id)) return <InvalidIDFallback rawID={rawID} />;

  const notice = await getNoticePostDetail(id, searchParams);

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <Suspense fallback={<PostFallback />}>
        {/* <NoticeViewer id={id} searchParams={searchParams} /> */}
        <NoticeViewer notice={notice} />
      </Suspense>
    </PageLayout>
  );
}

const InvalidIDFallback = ({ rawID }: { rawID: string }) => (
  <PageLayout titleType="small" titleMargin="mb-5">
    <p>
      <b>{rawID}</b>는 올바르지 않은 id입니다.
    </p>
  </PageLayout>
);
