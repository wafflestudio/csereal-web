'use client';

import { PropsWithChildren, ReactNode } from 'react';

import { useSessionContext } from '@/contexts/SessionContext';

export default function LoginVisible({
  staff,
  children,
  fallback,
}: PropsWithChildren & { staff?: boolean; fallback?: ReactNode }) {
  const { state } = useSessionContext();
  if (state === 'logout') return fallback;
  if (state === 'non-staff' && staff) return fallback;

  return children;
}
