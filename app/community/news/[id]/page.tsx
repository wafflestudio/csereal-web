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
    <PageLayout title={currPost?.title ?? ''} titleType="small" marginBottom="mb-5">
      <Attachment />
      <HTMLViewer htmlContent={currPost.description} margin="mt-4" />
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
