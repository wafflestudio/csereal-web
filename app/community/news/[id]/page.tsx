'use client';

import { getMockNewsPostDetail, getNewsPostDetail } from '@/apis/news';

import AdjPostNav from '@/components/common/AdjPostNav';
import Attachment from '@/components/common/Attachment';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import HTMLViewer from '@/components/editor/HTMLViewer';
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
    <PageLayout title={currPost?.title ?? ''} titleType="small" titleMargin="mb-5">
      {/* TODO: API 반영 */}
      <Attachment files={mockFiles} />
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

const mockFiles = [
  {
    name: 'FILE1',
    url: 'www.google.com',
    bytes: 123123123,
  },
  {
    name: 'FILE2',
    url: 'www.apple.com',
    bytes: 123123123,
  },
  {
    name: 'FILE1',
    url: 'www.instagram.com',
    bytes: 123123123,
  },
];
