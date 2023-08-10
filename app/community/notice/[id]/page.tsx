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
  const { currPost, prevPost, nextPost, listPathWithQuery } = usePosts<NoticePostResponse>(
    noticePath,
    getNoticePostDetailMock, // 추후에 getNoticePostDetail로 변경
  );

  return (
    <PageLayout currentPage={notice} title={currPost?.title || ''} titleSize="text-lg">
      <div className="mb-6 text-xs font-yoon text-neutral-400 ml-2.5">
        글쓴이: {writer}, 작성시각:{' '}
        {formatDate(new Date(currPost?.createdAt || ''), { includeDay: true, includeTime: true })}
      </div>
      <HTMLViewer htmlContent={currPost?.description || ''} margin="mb-10 ml-2.5" />
      <StraightNode />
      <Tags tags={currPost?.tags || []} page={notice} margin="mt-3 ml-6" />
      <AdjPostNav prevPost={prevPost} nextPost={nextPost} href={listPathWithQuery} margin="mt-12" />
    </PageLayout>
  );
}
