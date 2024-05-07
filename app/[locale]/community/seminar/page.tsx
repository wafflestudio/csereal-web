// TODO: searchParams를 사용했으므로 자동 dynamic 처리되어야할 것 같은데 안되어 추가
export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

import SeminarContent from '@/app/[locale]/community/seminar/SeminarContent';

import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import AdminFeatures from './helper/AdminFeatures';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('세미나'),
    description: '서울대학교 컴퓨터공학부 세미나 목록 페이지입니다.',
  };
}

interface SeminarPageParams {
  searchParams: PostSearchQueryParams;
}

export default async function SeminarPage({ searchParams }: SeminarPageParams) {
  return (
    <PageLayout titleType="big">
      {/* TODO: fallback */}
      <Suspense>
        <SeminarContent searchParams={searchParams} />
      </Suspense>
      <LoginVisible staff>
        <AdminFeatures />
      </LoginVisible>
    </PageLayout>
  );
}
