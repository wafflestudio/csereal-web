'use client';

import { PropsWithChildren } from 'react';

import Footer from '@/components/layout/footer/Footer';

import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

import { main } from '@/types/page';

export default function Content({ children }: PropsWithChildren) {
  const node = useCurrentSegmentNode();
  const ml = node === main ? `ml-[11rem]` : 'ml-[6.25rem]';

  return (
    <div className={`flex flex-col flex-1 ${ml}`}>
      <main className="flex flex-col flex-1 overflow-scroll overflow-x-hidden">
        <div className="flex-1">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
