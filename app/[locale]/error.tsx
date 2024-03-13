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
    <PageLayout titleType="big">
      <p className="mb-4">
        {error.digest}: {error.message}
      </p>
      <button className="underline" onClick={reset}>
        새로고침
      </button>
    </PageLayout>
  );
}
