import { Suspense } from 'react';

import { getNoticePostDetail } from '@/apis/notice';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import PostFallback from '@/components/layout/fallback/PostFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { PostSearchQueryParams } from '@/types/post';
import { getMetadata } from '@/utils/metadata';
import { notice } from '@/utils/segmentNode';

import NoticeViewer from './NoticeViewer';

export async function generateMetadata({
  params: { locale, id },
  searchParams,
}: NoticePostPageProps) {
  try {
    const noticePost = await getNoticePostDetail(parseInt(id), searchParams);
    return await getMetadata({
      locale,
      node: notice,
      metadata: {
        title: `${noticePost.title}`,
      },
    });
  } catch {
    return {};
  }
}

interface NoticePostPageProps {
  params: { id: string; locale: string };
  searchParams: PostSearchQueryParams;
}

export default async function NoticePostPage({
  params: { id: rawID },
  searchParams,
}: NoticePostPageProps) {
  const id = +rawID;

  // ID가 잘못된 경우 예외 처리
  if (Number.isNaN(id)) return <InvalidIDFallback rawID={rawID} />;

  try {
    const notice = await getNoticePostDetail(id, searchParams);
    return (
      <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
        <Suspense fallback={<PostFallback />}>
          <NoticeViewer notice={notice} />
        </Suspense>
      </PageLayout>
    );
  } catch {
    return <InvalidIDFallback rawID={rawID} />;
  }
}
