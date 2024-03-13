// TODO: searchParams를 사용했으므로 자동 dynamic 처리되어야할 것 같은데 안되어 추가
export const dynamic = 'force-dynamic';

import { Suspense } from 'react';

import NewsPageContent from '@/app/[locale]/community/news/NewsPageContent';

import LoginVisible from '@/components/common/LoginVisible';
import SearchBox from '@/components/common/search/SearchBox';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NEWS_TAGS } from '@/constants/tag';

import { PostSearchQueryParams } from '@/types/post';

import AdminFeatures from './helper/AdminFeatures';

interface NewsPageParams {
  searchParams: PostSearchQueryParams;
}

export default function NewsPage({ searchParams }: NewsPageParams) {
  return (
    <PageLayout titleType="big" bodyStyle={{ width: 'fit-content' }}>
      <SearchBox tags={NEWS_TAGS} />
      {/* TODO: fallback */}
      <Suspense>
        <NewsPageContent searchParams={searchParams} />
      </Suspense>
      <LoginVisible staff>
        <AdminFeatures />
      </LoginVisible>
    </PageLayout>
  );
}
