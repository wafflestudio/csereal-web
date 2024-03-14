'use client';

import { ReactNode } from 'react';

import { usePathname } from '@/navigation';

export default function MarginedMain({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const isMain = pathName === '/';
  const marginLeft = isMain ? `sm:ml-[11rem]` : 'sm:ml-[6.25rem]';

  return <main className={`flex grow flex-col overflow-auto ${marginLeft}`}>{children}</main>;
}
