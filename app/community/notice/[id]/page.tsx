'use client';

import { getNoticePostDetail } from '@/apis/notice';

import AdjPostNav from '@/components/common/AdjPostNav';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import PageLayout from '@/components/layout/PageLayout';

import { usePosts } from '@/hooks/usePosts';

import { notice } from '@/types/page';
import { NoticePostFull } from '@/types/post';

import { formatDate } from '@/utils/formatting';
import { getPath } from '@/utils/page';

const writer = '박지혜';

const NoticeDetailMock: NoticePostFull = {
  id: 1,
  title: '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발',
  createdAt: '2023-07-11T09:29:13',
  modifiedAt: '',
  isPublic: true,
  isSlide: false,
  isPinned: false,
  description: '',
  tags: ['입학', '기타'],
  prevId: null,
  nextId: 2,
};

const noticePath = getPath(notice);

export default function NoticePostPage() {
  const { posts, listPathWithQuery } = usePosts<NoticePostFull>(noticePath, getNoticePostDetail);
  const { curr, prev, next } = posts;
  const currPost = curr || NoticeDetailMock;

  return (
    <PageLayout
      currentPage={notice}
      title="2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발 안내"
      titleSize="text-lg"
    >
      <div className="mb-6 text-xs font-yoon text-neutral-400 ml-2.5">
        글쓴이: {writer}, 작성시각:{' '}
        {formatDate(new Date(currPost.createdAt), { includeDay: true, includeTime: true })}
      </div>
      <div className="border w-auto h-[300px] mb-10 ml-2.5"></div>
      <StraightNode />
      <Tags tags={currPost.tags} page={notice} margin="mt-3 ml-6" />
      <AdjPostNav prevPost={prev} nextPost={next} href={listPathWithQuery} margin="mt-12" />
    </PageLayout>
  );
}
