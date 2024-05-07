import { Metadata } from 'next';
import { Suspense } from 'react';

import { getSeminarPost } from '@/apis/seminar';

import PostFallback from '@/components/layout/fallback/PostFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import SeminarViewer from './SeminarViewer';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}): Promise<Metadata> {
  const seminar = await getData(parseInt(params.id), searchParams);

  return {
    title: `${seminar.title}`,
    description: `서울대학교 컴퓨터공학부 세미나 페이지입니다.`,
  };
}

interface SeminarPostPageProps {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}

export default async function SeminarPostPage({ params, searchParams }: SeminarPostPageProps) {
  const id = parseInt(params.id);
  if (Number.isNaN(id)) throw new Error('/seminar/[id]: id가 숫자가 아닙니다.');

  const seminar = await getData(id, searchParams);

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <Suspense fallback={<PostFallback />}>
        <SeminarViewer seminar={seminar} />
      </Suspense>
    </PageLayout>
  );
}

async function getData(id: number, searchParams: PostSearchQueryParams) {
  const seminar = await getSeminarPost(id, searchParams);

  return seminar;
}
