'use client';

import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from './ErrorFallback';
import LoadingFallback from './LoadingFallback';

export default function Boundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
    </ErrorBoundary>
  );
}
