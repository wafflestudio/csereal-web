// TODO: searchParams를 사용했으므로 자동 dynamic 처리되어야할 것 같은데 안되어 추가
export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

import NewsPageContent from '@/app/[locale]/community/news/NewsPageContent';

import LoginVisible from '@/components/common/LoginVisible';
import SearchBox from '@/components/common/search/SearchBox';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NEWS_TAGS } from '@/constants/tag';

import { PostSearchQueryParams } from '@/types/post';

import AdminFeatures from './helper/AdminFeatures';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('새 소식'),
    description: '서울대학교 컴퓨터공학부 새 소식 목록 페이지입니다.',
  };
}

interface NewsPageParams {
  searchParams: PostSearchQueryParams;
}

export default function NewsPage({ searchParams }: NewsPageParams) {
  return (
    <PageLayout titleType="big">
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
