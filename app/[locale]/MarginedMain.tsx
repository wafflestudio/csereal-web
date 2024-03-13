'use client';

import { ReactNode } from 'react';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import { main as mainNode } from '@/utils/segmentNode';

export default function MarginedMain({ children }: { children: ReactNode }) {
  const node = useCurrentSegmentNode();
  const marginLeft = node === mainNode ? `sm:ml-[4.75rem]` : '';

  // iOS에서 상단바 액션(scrolltoTop)을 지원하기 위해 모바일에서는 overflow-scroll 제외
  // 데스크톱에서는 좌측 네비를 고정시키기 위해서 필요
  return <main className={`flex grow flex-col sm:overflow-scroll ${marginLeft}`}>{children}</main>;
}
