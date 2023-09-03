'use client';

import useSwr from 'swr';

import ErrorFallback from '@/components/layout/ErrorFallback';
import LoadingFallback from '@/components/layout/LoadingFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import NoticeContent from '@/components/notice/NoticeContent';

import { useCustomSearchParams } from '@/hooks/useCustomSearchParams';

import { GETNoticePostsResponse } from '@/types/post';

export default function NoticePage() {
  const { page, keyword, tags } = useCustomSearchParams();
  const { data, mutate, error, isLoading } = useSwr<GETNoticePostsResponse>({
    url: '/notice',
    params: { page, keyword, tag: tags },
  });

  if (error) {
    return (
      <PageLayout titleType="big" titleMargin="mb-6">
        <ErrorFallback error={error} />
      </PageLayout>
    );
  }

  if (!data || isLoading) {
    return (
      <PageLayout titleType="big" titleMargin="mb-6">
        <LoadingFallback />
      </PageLayout>
    );
  }

  // edit mode에서 페이지 나가려고 할 때 경고 띄워주기: 변경사항이 저장되지 않았습니다. 정말 나가시겠습니까?

  return <NoticeContent data={data} mutate={mutate} />;
}
