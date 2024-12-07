import { Suspense } from 'react';

import { getSeminarPost } from '@/apis/v1/seminar/[id]';
import PostFallback from '@/app/[locale]/community/components/PostFallback';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { seminar } from '@/constants/segmentNode';
import { PostSearchQueryParams } from '@/types/post';
import { getMetadata } from '@/utils/metadata';

import SeminarViewer from './SeminarViewer';

export async function generateMetadata(props: SeminarPostPageProps) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const { locale, id } = params;

  try {
    const seminarPost = await getSeminarPost(parseInt(id), searchParams);

    return await getMetadata({
      locale,
      node: seminar,
      metadata: {
        title: `${seminarPost.title}`,
      },
    });
  } catch {
    return {};
  }
}

interface SeminarPostPageProps {
  params: Promise<{ id: string; locale: string }>;
  searchParams: Promise<PostSearchQueryParams>;
}

export default async function SeminarPostPage(props: SeminarPostPageProps) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const id = parseInt(params.id);
  if (Number.isNaN(id)) throw new Error('/seminar/[id]: id가 숫자가 아닙니다.');

  try {
    const seminar = await getSeminarPost(id, searchParams);

    return (
      <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
        <Suspense fallback={<PostFallback />}>
          <SeminarViewer seminar={seminar} />
        </Suspense>
      </PageLayout>
    );
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
