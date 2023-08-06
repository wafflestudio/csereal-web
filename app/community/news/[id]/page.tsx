'use client';

import { getMockNewsPostDetail, getNewsPostDetail } from '@/apis/news';

import AdjPostNav from '@/components/common/AdjPostNav';
import HTMLViewer from '@/components/common/HTMLViewer';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import PageLayout from '@/components/layout/PageLayout';

import { usePosts } from '@/hooks/usePosts';

import { news } from '@/types/page';

import { getPath } from '@/utils/page';

const newsPath = getPath(news);

export default function NewsPostPage({ params }: { params: { id: number } }) {
  const { posts, listPathWithQuery } = usePosts(newsPath, getNewsPostDetail);
  let { curr, prev, next } = posts;
  curr = curr || getMockNewsPostDetail(params.id);

  return (
    <PageLayout currentPage={news} title={curr?.title ?? ''} titleSize="text-lg">
      <HTMLViewer htmlContent={curr.description} />
      <StraightNode />
      <Tags tags={curr.tags} page={news} margin="mt-3 ml-6" />
      <AdjPostNav prevPost={prev} nextPost={next} href={listPathWithQuery} margin="mt-12" />
    </PageLayout>
  );
}
