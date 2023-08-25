'use client';

import { getNoticePostDetail, getNoticePostDetailMock } from '@/apis/notice';

import AdjPostNav from '@/components/common/AdjPostNav';
import Attachments from '@/components/common/Attachment';
import HTMLViewer from '@/components/common/HTMLViewer';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { usePosts } from '@/hooks/usePosts';

import { notice } from '@/types/page';
import { NoticePostResponse } from '@/types/post';

import { formatDate } from '@/utils/formatting';
import { getPath } from '@/utils/page';

const writer = '박지혜';

const noticePath = getPath(notice);

export default function NoticePostPage() {
  const { currPost, prevPostPreview, nextPostPreview, listPathWithQuery } =
    usePosts<NoticePostResponse>(
      noticePath,
      getNoticePostDetailMock, // 추후에 getNoticePostDetail로 변경
    );

  return (
    <PageLayout title={currPost?.title ?? ''} titleType="small" titleMargin="mb-5">
      <div className="mb-10 ml-2.5 text-xs font-yoon text-neutral-400">
        글쓴이: {writer}, 작성시각:{' '}
        {currPost &&
          formatDate(new Date(currPost.createdAt), { includeDay: true, includeTime: true })}
      </div>
      <Attachments files={[]} />
      <HTMLViewer htmlContent={currPost?.description || ''} margin="mt-4 mb-10 ml-2.5" />
      <StraightNode />
      <Tags tags={currPost?.tags || []} margin="mt-3 ml-6" searchPath={noticePath} />
      <AdjPostNav
        prevPost={prevPostPreview}
        nextPost={nextPostPreview}
        href={listPathWithQuery}
        margin="mt-12"
      />
    </PageLayout>
  );
}
