'use client';

import { ReactNode } from 'react';

import {
  NAVBAR_CLOSED_WIDTH_REM,
  NAVBAR_EXPANDED_WIDTH_REM,
} from '@/components/layout/navbar/NavbarRoot';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import useResponsive from '@/utils/hooks/useResponsive';
import { main as mainNode } from '@/utils/segmentNode';

export default function MarginedMain({ children }: { children: ReactNode }) {
  const node = useCurrentSegmentNode();
  const { screenType } = useResponsive();

  let marginLeft = '';
  if (screenType === 'desktop') {
    marginLeft =
      node === mainNode ? `${NAVBAR_EXPANDED_WIDTH_REM}rem` : `${NAVBAR_CLOSED_WIDTH_REM}rem`;
  }

  return (
    <main className="flex h-full flex-col overflow-scroll" style={{ marginLeft }}>
      {children}
    </main>
  );
}
