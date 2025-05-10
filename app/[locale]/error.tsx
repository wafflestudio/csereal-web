'use client';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <PageLayout titleType="big" hideNavbar={true}>
      <div className="flex flex-col items-start justify-center p-4 text-center">
        <h2 className="mb-4 text-2xl font-bold">불편을 드려 죄송합니다.</h2>
        <p className="mb-6">에러가 발생했습니다.</p>
        <p className="mb-6">새로고침을 시도하거나, 네트워크 연결을 확인해주세요.</p>
        <button className="underline" onClick={() => reset()}>
          새로고침
        </button>
        <p className="text-gray-500 mt-4 text-sm">
          {process.env.NODE_ENV === 'development' && error.digest && `Error code: ${error.digest}`}
        </p>
      </div>
    </PageLayout>
  );
}
