'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { getNoticePostDetailAPI } from '@/apis/notice';

import AdjPostNav from '@/components/common/AdjPostNav';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import PageLayout from '@/components/layout/PageLayout';

import { NoticePostFull } from '@/types/notice';
import { notice } from '@/types/page';

import { formatDate } from '@/utils/formatting';
import { getPath } from '@/utils/page';
import { paramsToString } from '@/utils/search';

const PrevPostMock = {
  title:
    '송현오 교수 연구진, 생성 모델의 이상 행동 탐지 기술 및 인공 신경망 깊이 압축 기술로 세계 선도',
  href: '',
};
const NextPostMock = { title: '(없음)', href: '' };

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
  tags: [''],
};

const noticePath = getPath(notice);

export default function NoticePostPage() {
  const [post, setPost] = useState<NoticePostFull>(NoticeDetailMock);
  const { id } = useParams();
  const params = useSearchParams();
  const tags = ['입학', '졸업']; // post.tags 정상 작동하면 이거 지우고 그걸로 변경

  const getPost = useCallback(async () => {
    const data = await getNoticePostDetailAPI(parseInt(id), params);
    if (data) setPost(data);
  }, [id, params]);

  useEffect(() => {
    // getPost();
  }, [getPost]);

  return (
    <PageLayout
      currentPage={notice}
      title="2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발 안내"
      titleSize="text-lg"
    >
      <div className="mb-[24px] text-xs font-yoon text-neutral-400 ml-[10px]">
        글쓴이: {writer}, 작성시각:{' '}
        {formatDate(new Date(post.createdAt), { includeDay: true, includeTime: true })}
      </div>
      <div className="border w-[830px] h-[300px] mb-[40px] ml-[10px]"></div>
      <StraightNode />
      <Tags tags={tags} page={notice} margin="mt-[12px] ml-[24px]" />
      <AdjPostNav
        prevPost={PrevPostMock}
        nextPost={NextPostMock}
        href={`${noticePath}${paramsToString(params)}`}
        margin="mt-[48px]"
      />
    </PageLayout>
  );
}
