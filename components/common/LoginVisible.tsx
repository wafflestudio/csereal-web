'use client';

import { ReactNode } from 'react';

import { useSessionContext } from '@/contexts/SessionContext';

type Props = {
  staff?: boolean;
  fallback?: ReactNode;
  children: ReactNode;
};

export default function LoginVisible({ staff, children, fallback }: Props) {
  const { state } = useSessionContext();
  if (state === 'logout') return fallback;
  if (staff && state !== 'ROLE_STAFF') return fallback;

  return children;
}
