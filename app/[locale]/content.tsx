'use client';

import { PropsWithChildren } from 'react';

import Footer from '@/components/layout/footer/Footer';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';
import { main } from '@/utils/segmentNode';

export default function Content({ children }: PropsWithChildren) {
  const node = useCurrentSegmentNode();
  const ml = node === main ? `sm:ml-[11rem]` : 'sm:ml-[6.25rem]';

  return (
    <main className={`flex flex-col w-[100vh - 5rem] h-full overflow-scroll ${ml}`}>
      {children}
      <Footer />
    </main>
  );
}
