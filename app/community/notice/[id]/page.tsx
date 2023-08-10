'use client';

import { getNoticePostDetail, getNoticePostDetailMock } from '@/apis/notice';

import AdjPostNav from '@/components/common/AdjPostNav';
import HTMLViewer from '@/components/common/HTMLViewer';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import PageLayout from '@/components/layout/PageLayout';

import { usePosts } from '@/hooks/usePosts';

import { notice } from '@/types/page';
import { NoticePostResponse } from '@/types/post';

import { formatDate } from '@/utils/formatting';
import { getPath } from '@/utils/page';

const writer = '박지혜';

const noticePath = getPath(notice);

export default function NoticePostPage() {
  const { posts, listPathWithQuery } = usePosts<NoticePostResponse>(
    noticePath,
    getNoticePostDetailMock, // 추후에 getNoticePostDetail로 변경
  );

  if (!posts) return <></>;

  const { curr, prev, next } = posts;

  return (
    <PageLayout currentPage={notice} title={curr.title} titleSize="text-lg">
      <div className="mb-6 text-xs font-yoon text-neutral-400 ml-2.5">
        글쓴이: {writer}, 작성시각:{' '}
        {formatDate(new Date(curr.createdAt), { includeDay: true, includeTime: true })}
      </div>
      <HTMLViewer htmlContent={curr.description} margin="mb-10 ml-2.5" />
      <StraightNode />
      <Tags tags={curr.tags} page={notice} margin="mt-3 ml-6" />
      <AdjPostNav prevPost={prev} nextPost={next} href={listPathWithQuery} margin="mt-12" />
    </PageLayout>
  );
}
