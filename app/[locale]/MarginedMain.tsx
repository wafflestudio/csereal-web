'use client';

import { ReactNode } from 'react';

import { usePathname } from '@/navigation';

export default function MarginedMain({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const isMain = pathName === '/';
  const paddingLeft = isMain ? `sm:pl-[11rem]` : 'sm:pl-[6.25rem]';

  return <main className={`flex min-h-full min-w-full flex-col ${paddingLeft}`}>{children}</main>;
}
