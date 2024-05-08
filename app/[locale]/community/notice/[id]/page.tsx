import { Metadata } from 'next';
import { Suspense } from 'react';

import { getNoticePostDetail } from '@/apis/notice';

import PostFallback from '@/components/layout/fallback/PostFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import NoticeViewer from './NoticeViewer';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}): Promise<Metadata> {
  const notice = await getNoticePostDetail(parseInt(params.id), searchParams);

  return {
    title: `${notice.title}`,
    description: `서울대학교 컴퓨터공학부 공지사항 페이지입니다.`,
  };
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
