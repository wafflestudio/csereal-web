import { Suspense } from 'react';

import { getSeminarPost } from '@/apis/seminar';

import PostFallback from '@/components/layout/fallback/PostFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import { getMetadata } from '@/utils/metadata';
import { seminar } from '@/utils/segmentNode';

import SeminarViewer from './SeminarViewer';

export async function generateMetadata({
  params: { locale, id },
  searchParams,
}: SeminarPostPageProps) {
  const seminarPost = await getSeminarPost(parseInt(id), searchParams);

  return await getMetadata({
    locale,
    node: seminar,
    metadata: {
      title: `${seminarPost.title}`,
    },
  });
}

interface SeminarPostPageProps {
  params: { id: string; locale: string };
  searchParams: PostSearchQueryParams;
}

export default async function SeminarPostPage({ params, searchParams }: SeminarPostPageProps) {
  const id = parseInt(params.id);
  if (Number.isNaN(id)) throw new Error('/seminar/[id]: id가 숫자가 아닙니다.');

  const seminar = await getSeminarPost(id, searchParams);

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <Suspense fallback={<PostFallback />}>
        <SeminarViewer seminar={seminar} />
      </Suspense>
    </PageLayout>
  );
}
