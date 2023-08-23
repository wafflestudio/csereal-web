'use client';

import { getNoticePostDetail, getNoticePostDetailMock } from '@/apis/notice';

import AdjPostNav from '@/components/common/AdjPostNav';
import Attachment from '@/components/common/Attachment';
import HTMLViewer from '@/components/common/HTMLViewer';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { usePosts } from '@/hooks/usePosts';

import { notice } from '@/types/page';
import { NoticePostResponse } from '@/types/post';

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
        글쓴이: {writer}, 작성시각: {currPost && formatFullDate(new Date(currPost.createdAt))}
      </div>
      <Attachment />
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

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const formatFullDate = (date: Date) => {
  const yyyy = String(date.getFullYear()).padStart(4, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const day = DAYS[date.getDay()];

  let half;
  let hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, '0');
  if (hour < 12) {
    if (hour === 0) hour = 12;
    half = '오전';
  } else {
    if (hour !== 12) hour -= 12;
    half = '오후';
  }
  const time = `${half} ${hour}:${minute}`;

  return `${yyyy}/${mm}/${dd} (${day}) ${time}`; // e.g. 2023/08/01 (화) 오후 5:09
};
