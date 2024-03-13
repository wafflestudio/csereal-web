import { Suspense } from 'react';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { PostSearchQueryParams } from '@/types/post';

import NoticeViewer from './NoticeViewer';

interface NoticePostPageProps {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}

export default async function NoticePostPage({
  params: { id: rawID },
  searchParams,
}: NoticePostPageProps) {
  const id = +rawID;

  // ID가 잘못된 경우 예외 처리
  if (Number.isNaN(id)) return <InvalidIDFallback rawID={rawID} />;

  return (
    <PageLayout titleType="big" bodyStyle={{ padding: 0 }}>
      <Suspense>
        <NoticeViewer id={id} searchParams={searchParams} />
      </Suspense>
    </PageLayout>
  );
}

const InvalidIDFallback = ({ rawID }: { rawID: string }) => (
  <PageLayout titleType="small" titleMargin="mb-5">
    <p>
      <b>{rawID}</b>는 올바르지 않은 id입니다.
    </p>
  </PageLayout>
);
