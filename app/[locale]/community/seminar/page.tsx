// TODO: searchParams를 사용했으므로 자동 dynamic 처리되어야할 것 같은데 안되어 추가
export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { PostSearchQueryParams } from '@/apis/types/post';
import { getSeminarPosts } from '@/apis/v2/seminar';
import AdminFeatures from '@/app/[locale]/community/seminar/components/AdminFeatures';
import SeminarContent from '@/app/[locale]/community/seminar/SeminarContent';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { seminar } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';
import { validatePageNum } from '@/utils/validateSearchParams';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: seminar });
}

interface SeminarPageParams {
  searchParams: Promise<PostSearchQueryParams>;
}

export default async function SeminarPage(props: SeminarPageParams) {
  const searchParams = await props.searchParams;
  if (!validatePageNum(searchParams.pageNum)) {
    notFound();
  }

  const data = await getSeminarPosts(searchParams);

  return (
    <PageLayout titleType="big">
      {/* TODO: fallback */}
      <Suspense>
        <SeminarContent data={data} />
      </Suspense>
      <LoginVisible staff>
        <AdminFeatures />
      </LoginVisible>
    </PageLayout>
  );
}
