// TODO: searchParams를 사용했으므로 자동 dynamic 처리되어야할 것 같은데 안되어 추가
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';

import SeminarContent from '@/app/[locale]/community/seminar/SeminarContent';

import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import AdminFeatures from './helper/AdminFeatures';

interface SeminarPageParams {
  searchParams: PostSearchQueryParams;
}

export default async function SeminarPage({ searchParams }: SeminarPageParams) {
  return (
    <PageLayout titleType="big">
      <Suspense>
        <SeminarContent searchParams={searchParams} />
      </Suspense>
      <LoginVisible staff>
        <AdminFeatures />
      </LoginVisible>
    </PageLayout>
  );
}
