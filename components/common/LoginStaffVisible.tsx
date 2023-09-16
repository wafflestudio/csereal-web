'use client';

import { PropsWithChildren, ReactNode } from 'react';

import { useSessionContext } from '@/contexts/SessionContext';

export default function LoginStaffVisible({
  children,
  fallback,
}: PropsWithChildren & { fallback?: ReactNode }) {
  const { user } = useSessionContext();
  return user?.isStaff ? children : fallback;
}
