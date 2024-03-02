'use client';

import { PropsWithChildren } from 'react';

import Footer from '@/components/layout/footer/Footer';

import { main } from '@/types/page';

import useCurrentSegmentNode from '@/utils/hooks/useCurrentSegmentNode';


export default function Content({ children }: PropsWithChildren) {
  const node = useCurrentSegmentNode();
  const ml = node === main ? `sm:ml-[11rem]` : 'sm:ml-[6.25rem]';

  return (
    <div className={`flex flex-col flex-1 ${ml}`}>
      <main className="flex flex-col flex-1 overflow-scroll overflow-x-hidden">
        <div className="flex-1">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
