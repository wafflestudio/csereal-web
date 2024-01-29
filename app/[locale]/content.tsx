'use client';

import { PropsWithChildren, Suspense } from 'react';

import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';

import useCurrentSegmentNode from '@/hooks/useCurrentSegmentNode';

import { main } from '@/types/page';

export default function Content({ children }: PropsWithChildren) {
  const node = useCurrentSegmentNode();
  const ml = node === main ? `ml-[11rem]` : 'ml-[6.25rem]';

  return (
    <div className={`flex flex-col flex-1 font-noto-demi ${ml}`}>
      <Suspense>
        <Header />
      </Suspense>
      <main className="flex flex-col flex-1 overflow-scroll overflow-x-hidden">
        <div className="flex-1">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
