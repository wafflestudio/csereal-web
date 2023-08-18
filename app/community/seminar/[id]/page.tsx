'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { getMockSeminarPost } from '@/apis/seminar';

import AdjPostNav from '@/components/common/AdjPostNav';
import Attachment from '@/components/common/Attachment';
import { StraightNode } from '@/components/common/Nodes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { usePosts } from '@/hooks/usePosts';

import { seminar } from '@/types/page';
import { SeminarPostResponse } from '@/types/post';

import { getPath } from '@/utils/page';

const seminarPath = getPath(seminar);

export default function SeminarPostPage() {
  let { currPost, nextPostPreview, prevPostPreview, listPathWithQuery } =
    usePosts<SeminarPostResponse>(seminarPath, getMockSeminarPost);

  const id = parseInt(useParams().id);
  const [mockdata, setMockdata] = useState<SeminarPostResponse>();
  const fetchSeminarPost = useCallback(async () => {
    const res = await getMockSeminarPost(id);
    setMockdata(res);
  }, [id]);

  useEffect(() => {
    fetchSeminarPost();
  }, [fetchSeminarPost]);

  currPost ||= mockdata;

  return (
    currPost && (
      <PageLayout title={currPost.title} titleType="small">
        <div className="mb-9 text-sm font-yoon text-neutral-700 leading-[1.63rem] flow-root break-all">
          {/* TODO: 첨부파일 여부에 따라 제목노드 margin bottom 바꿔줘야 함 (혹은 본문 margin top으로 해도 상관없음)
                    첨부파일 있음 -> 제목노드 margin X  (첨부파일에 마진이 들어가있음)
                    첨부파일 없음 -> 제목노드 marginBottom mb-9 (36px) */}
          <Attachment />
          <div className="relative float-right ml-7 mb-7 w-60 h-60">
            <Image
              src={currPost.imageURL}
              alt="대표 이미지"
              priority
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>
          <div>이름: {currPost.host}</div>
          <div>소속: {currPost.company}</div>

          <div className="mt-12">주최: {currPost.professor}</div>
          <div>일시: {currPost.date}</div>
          <div>장소: {currPost.location}</div>

          <div className="font-bold  mt-12">요약</div>
          <div>{currPost.description}</div>
          <div className="font-bold  mt-12">연사 소개</div>
          <div>{currPost.hostDescription}</div>
        </div>
        <StraightNode />
        <AdjPostNav
          prevPost={prevPostPreview}
          nextPost={nextPostPreview}
          href={listPathWithQuery}
          margin="mt-12"
        />
      </PageLayout>
    )
  );
}
