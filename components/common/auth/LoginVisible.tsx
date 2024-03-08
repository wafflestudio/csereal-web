'use client';

import { PropsWithChildren, ReactNode } from 'react';

import { isLogined } from '@/utils/auth';

export default function AdminVisible({
  children,
  fallback,
}: PropsWithChildren & { fallback?: ReactNode }) {
  return isLogined() ? children : fallback;
}
