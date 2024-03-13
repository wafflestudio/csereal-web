'use client';

import { ReactNode } from 'react';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import { main as mainNode } from '@/utils/segmentNode';

export default function MarginedMain({ children }: { children: ReactNode }) {
  const node = useCurrentSegmentNode();
  const marginLeft = node === mainNode ? `sm:ml-[11rem]` : `sm:ml-[6.25rem]`;

  return <main className={`ml-0 flex flex-col overflow-scroll ${marginLeft}`}>{children}</main>;
}
