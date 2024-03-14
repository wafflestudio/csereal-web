'use client';

import { ReactNode } from 'react';

import { usePathname } from '@/navigation';

export default function MarginedMain({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const isMain = pathName === '/';
  const marginLeft = isMain ? `sm:ml-[11rem]` : 'sm:ml-[6.25rem]';

  // iOS에서 상단바 액션(scrolltoTop)을 지원하기 위해 모바일에서는 overflow-scroll 제외
  // 데스크톱에서는 좌측 네비를 고정시키기 위해서 필요
  return <main className={`flex grow flex-col ${marginLeft}`}>{children}</main>;
}
