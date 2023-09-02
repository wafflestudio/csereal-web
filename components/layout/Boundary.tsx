'use client';

import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function Boundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export function ErrorFallback({ error }: { error: any }) {
  return (
    <div className="flex flex-col mx-[3.75rem] mt-3">
      <p>문제가 발생했습니다: </p>
      <p>{error.message}</p>
    </div>
  );
}

export function LoadingFallback() {
  return (
    <div className="animate-pulse flex flex-col mx-[3.75rem] mt-3">
      <div className="flex flex-col gap-2">
        <div className="h-4 bg-[#ffffff] opacity-30 rounded w-2/5"></div>
        <div className="h-4 bg-[#ffffff] opacity-30 rounded w-2/5"></div>
      </div>
      <div className="flex flex-1 flex-col gap-2 w-3/5 mt-4">
        <div className="h-4 bg-[#ffffff] opacity-30 rounded"></div>
        <div className="h-4 bg-[#ffffff] opacity-30 rounded"></div>
        <div className="h-4 bg-[#ffffff] opacity-30 rounded"></div>
      </div>
    </div>
  );
}
