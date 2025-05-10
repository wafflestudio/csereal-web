'use client';

import { ReactNode } from 'react';

import { Role } from '@/apis/types/role';
import { useSessionStore } from '@/stores/SessionStore';

type Props = {
  fallback?: ReactNode;
  children: ReactNode;
  role?: Role[] | Role;

  // role='ROLE_STAFF'일때와 동일
  staff?: boolean;
};

export default function LoginVisible({ staff, children, fallback, role }: Props) {
  const state = useSessionStore((s) => s.state);

  if (state === 'logout') return fallback;
  if (staff && state !== 'ROLE_STAFF') return fallback;

  if (role) {
    const roleArr = Array.isArray(role) ? role : [role];
    if (!roleArr.includes(state)) return fallback;
  }

  return children;
}
