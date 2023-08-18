'use client';

import { getMockNewsPostDetail, getNewsPostDetail } from '@/apis/news';

import AdjPostNav from '@/components/common/AdjPostNav';
import Attachment from '@/components/common/Attachment';
import HTMLViewer from '@/components/common/HTMLViewer';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { usePosts } from '@/hooks/usePosts';

import { news } from '@/types/page';

import { getPath } from '@/utils/page';

const newsPath = getPath(news);

export default function NewsPostPage({ params }: { params: { id: number } }) {
  let { currPost, prevPostPreview, nextPostPreview, listPathWithQuery } = usePosts(
    newsPath,
    getNewsPostDetail,
  );
  currPost ||= getMockNewsPostDetail(params.id);

  return (
    <PageLayout title={currPost?.title ?? ''} titleType="small">
      {/* TODO: 첨부파일 여부에 따라 제목노드 margin bottom 바꿔줘야 함 (혹은 본문 margin top으로 해도 상관없음)
                첨부파일 있음 -> 제목노드 margin X  (첨부파일에 마진이 들어가있음)
                첨부파일 없음 -> 제목노드 marginBottom mb-9 (36px) */}
      <Attachment />
      <HTMLViewer htmlContent={currPost.description} />
      <StraightNode margin="mt-[2.4375rem]" />
      <Tags tags={currPost.tags} margin="mt-3 ml-6" searchPath={newsPath} />
      <AdjPostNav
        prevPost={prevPostPreview}
        nextPost={nextPostPreview}
        href={listPathWithQuery}
        margin="mt-12"
      />
    </PageLayout>
  );
}
