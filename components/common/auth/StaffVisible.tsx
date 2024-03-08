'use client';

import Cookies from 'js-cookie';
import { PropsWithChildren, ReactNode } from 'react';
import useSWR from 'swr';

import { getRequest } from '@/apis/common/client';

import { COOKIE_SESSION_ID } from '@/constants/network';

export default function StaffVisible({
  children,
  fallback,
}: PropsWithChildren & { fallback?: ReactNode }) {
  const id = Cookies.get(COOKIE_SESSION_ID);
  const { data, error } = useSWR<{ isStaff: boolean }>(id ? '/user/is-staff' : null, getRequest);

  if (id === undefined || error || data === undefined) return fallback;

  return data.isStaff ? children : fallback;
}
