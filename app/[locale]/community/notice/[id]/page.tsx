import { Suspense } from 'react';

import { PostSearchQueryParams } from '@/apis/types/post';
import { getNoticePostDetail } from '@/apis/v1/notice/[id]';
import PostFallback from '@/app/[locale]/community/components/PostFallback';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { notice } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

import NoticeViewer from './NoticeViewer';

export async function generateMetadata(props: NoticePostPageProps) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const { locale, id } = params;

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
  params: Promise<{ id: string; locale: string }>;
  searchParams: Promise<PostSearchQueryParams>;
}

export default async function NoticePostPage(props: NoticePostPageProps) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const { id: rawID } = params;

  const id = +rawID;

  // ID가 잘못된 경우 예외 처리
  if (Number.isNaN(id)) return <InvalidIDFallback rawID={rawID} />;

  try {
    const notice = await getNoticePostDetail(id, searchParams);
    return (
      <PageLayout titleType="big" removePadding>
        <Suspense fallback={<PostFallback />}>
          <NoticeViewer notice={notice} />
        </Suspense>
      </PageLayout>
    );
  } catch {
    return <InvalidIDFallback rawID={rawID} />;
  }
}
